/**
 * @file Session.
 */
import {Environment} from './enums';
import {OAuth} from 'oauth';
import {titleToCamelProperties} from './util';
import type {IEtradeConfig, IFetchResponse, ITokenData} from './interfaces';

const HOSTNAMES = {
  [Environment.LIVE]: 'https://api.etrade.com',
  [Environment.SANDBOX]: 'https://apisb.etrade.com'
};

const REQUEST_MAX_DURATION = 1000 * 10;

export interface IFetchOptions {
  body?: Record<string, any>;
  headers?: string[];
  isOAuth?: boolean;
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT';
  path: string;
  query?: any;
}

/**
 * Session class.
 * @class
 */
class Session {
  private _accessToken: string;
  private _accessTokenSecret: string;
  private _consumerKey: string;
  private _consumerSecret: string;
  private _environment: Environment;
  private _oauth = null;
  private _oauthRequestToken: string;
  private _oauthRequestTokenSecret: string;

  /**
   * Initializes the session.
   * @param config - ETrade config object.
   * @param [config.accessToken] - The access token to set.
   * @param [config.accessTokenSecret] - The access token secret to set.
   * @param [config.consumerKey] - Consumer key to set.
   * @param [config.consumerSecret] - Consumer secret to set.
   * @param [config.environment] - ETrade environment to set.
   */
  public initialize({
    accessToken,
    accessTokenSecret,
    consumerKey,
    consumerSecret,
    environment = Environment.SANDBOX
  }: IEtradeConfig): void {
    this._accessToken = accessToken;
    this._accessTokenSecret = accessTokenSecret;
    this._consumerKey = consumerKey;
    this._consumerSecret = consumerSecret;
    this._environment = environment;

    this._oauth = new OAuth(
      `${HOSTNAMES[environment]}/oauth/request_token`,
      `${HOSTNAMES[environment]}/oauth/access_token`,
      consumerKey,
      consumerSecret,
      '1.0',
      undefined,
      'HMAC-SHA1'
    );

    this._oauth.setClientOptions({
      accessTokenHttpMethod: 'GET',
      followRedirects: false,
      requestTokenHttpMethod: 'GET'
    });
  }

  /**
   * Complete the oauth process with the verifier string.
   * @async
   * @param verifier - OAuth verifier string.
   * @returns {Promise<void>} - Complete promise.
   */
  public async oauthComplete(verifier: string): Promise<void> {
    return new Promise((res, rej) => {
      this._oauth.getOAuthAccessToken(
        this._oauthRequestToken,
        this._oauthRequestTokenSecret,
        verifier,
        (error, oAuthAccessToken, oAuthAccessTokenSecret) => {
          if (error) {
            return rej(error);
          }
          this._accessToken = oAuthAccessToken;
          this._accessTokenSecret = oAuthAccessTokenSecret;
          res();
        }
      );
    });
  }

  /**
   * Start the oauth process.
   * @async
   * @returns {Promise<string>} - String authorize URL.
   */
  public async oauthStart(): Promise<string> {
    return new Promise((res, rej) => {
      this._oauth.getOAuthRequestToken((error, oAuthToken, oAuthTokenSecret) => {
        if (error) {
          return rej(error);
        }
        this._oauthRequestToken = oAuthToken;
        this._oauthRequestTokenSecret = oAuthTokenSecret;

        const key = encodeURIComponent(this._consumerKey);
        const token = encodeURIComponent(oAuthToken);
        res(`https://us.etrade.com/e/t/etws/authorize?key=${key}&token=${token}`);
      });
    });
  }

  /**
   * Send an HTTP request.
   * @async
   * @param options - Fetch options.
   * @param [options.body] - Request body.
   * @param [options.isOAuth] - Whether the request is an OAuth request.
   * @param [options.method] - Request path.
   * @param [options.path] - Request path.
   * @param [options.query] - Request URL query params.
   * @returns {Promise<IFetchResponse>} - The request promise.
   */
  public request<T extends IFetchResponse>({
    body,
    isOAuth = false,
    method = 'GET',
    path,
    query = {}
  }: IFetchOptions): Promise<T> {
    const extension = isOAuth ? '' : '.json';
    const version = isOAuth ? '' : `/v1`;
    const url = new URL(`${HOSTNAMES[this._environment]}${version}${path}${extension}`);
    Object.keys(query).forEach((key: string) => {
      query[key] === undefined || url.searchParams.append(key, query[key]);
    });
    return new Promise((res, rej) =>
      this._oauth._performSecureRequest(
        this._accessToken,
        this._accessTokenSecret,
        method,
        url.toString(),
        null, // extra_params,
        body ? JSON.stringify(body) : undefined,
        extension ? 'application/json' : null,
        (error: Error, response: any, result: any): void => {
          if (error) {
            return rej(error);
          }
          try {
            const [data] = Object.values(JSON.parse(response));
            res(titleToCamelProperties(data || {}) as T);
          } catch (e) {
            res({message: response as string} as T);
          }
        }
      )
    );
  }

  /**
   * Set access token and access token secret.
   * @param accessToken - The access token.
   * @param accessTokenSecret - The access token secret.
   */
  public setToken(accessToken: string, accessTokenSecret: string): void {
    this._accessToken = accessToken;
    this._accessTokenSecret = accessTokenSecret;
  }

  /**
   * JSON format of this class.
   * @returns {ITokenData} - JSON format of this class.
   */
  public toJSON = (): ITokenData => ({
    accessToken: this._accessToken,
    accessTokenSecret: this._accessTokenSecret,
    environment: this._environment
  })
}

export default new Session;
