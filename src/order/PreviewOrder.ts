/**
 * @file Preview Order.
 */
import session from '../session';
import type {
  ICashBuyingPowerDetails,
  IDisclosure,
  IDtBuyingPowerDetails,
  IMarginBuyingPowerDetails,
  IOrderDetail,
  IPreviewId
} from './interface';
import type {IMessages, IPortfolioMargin} from '../interface';
import type {MarginLevel, OrderType} from './enums';

/* eslint-disable max-len */

export interface IPreviewOrderRequest {
  /** The unique account key. Retrievable by calling the List Accounts API. */
  accountIdKey: string;
  /** A reference number generated by the developer used to ensure that a duplicate order is not being submitted. This ID may be any value of 20 or less alphanumeric characters, but it must be unique within this account. This field does not appear in any API responses. */
  clientOrderId: string;
  /** The order details for the preview order request. */
  order: IOrderDetail[];
  /** The type of order being placed. */
  orderType: OrderType;
}

export interface IPreviewOrderResponse {
  /** The numeric account ID. */
  accountId: string;
  /** Cash Buying Power Details for the user. */
  cashBpDetails: ICashBuyingPowerDetails;
  /** A reference ID generated by the developer that is used to ensure that a duplicate order is not being submitted. This reference ID may be any value of 20 or less alphanumeric characters but must be unique within the account. This field does not appear in any API responses. */
  clientOrderId: string;
  /** The commission message. */
  commissionMessage: string;
  /** The disclosure designation. */
  disclosure: IDisclosure;
  /** Indicator flag identifying whether daylight savings time is applicable or not. */
  dstFlag: boolean;
  /** Day Trading Buying Power Details for the user. */
  dtBpDetails: IDtBuyingPowerDetails;
  /** Indicator flag identifying whether user is an E*TRADE employee. */
  isEmployee: boolean;
  /** Margin Buying Power Details for the user. */
  marginBpDetails: IMarginBuyingPowerDetails;
  /** The code that designates the applicable margin level. */
  marginLevelCd: MarginLevel;
  /** The object for the message list. */
  messageList: IMessages;
  /** The code that designates the applicable options level. */
  optionLevelCd: number;
  /** The details of the order. */
  order: IOrderDetail[];
  /** The type of order being placed. */
  orderType: OrderType;
  /** The portfolio margin details for the user. */
  portfolioMargin: IPortfolioMargin;
  /** This parameter is required and must specify the numeric preview ID from the preview and the other parameters of this request must match the parameters of the preview. */
  previewIds: IPreviewId[];
  /** The preview time. */
  previewTime: number;
  /** The total commission. */
  totalCommission: number;
  /** The total order value. */
  totalOrderValue: number;
}

/**
 * Submit an order request for preview before placing it.
 * @async
 * @param {IPreviewOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<IPreviewOrderResponse>} - Order details.
 */
export const PreviewOrder = ({
  accountIdKey,
  ...body
}: IPreviewOrderRequest): Promise<IPreviewOrderResponse> =>
  session.request<IPreviewOrderResponse>({
    body,
    method: 'POST',
    path: `/accounts/${accountIdKey}/orders/preview`
  });
