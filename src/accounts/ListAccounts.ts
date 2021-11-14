/**
 * @file List Accounts.
 */
import {fetchWithAuth} from '../session';
import type {IAccounts} from './interface';

export interface IListAccountsResponse {
  /** List of accounts. */
  accounts: IAccounts;
}

/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @returns {Promise<IListAccountsResponse>} - List of accounts.
 */
export const ListAccounts = (): Promise<IListAccountsResponse> =>
  fetchWithAuth<IListAccountsResponse>({path: '/accounts/list'});
