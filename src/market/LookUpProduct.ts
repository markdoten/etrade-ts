/**
 * @file Look Up Product.
 */
import {fetchWithAuth} from '../session';
import type {IData} from './interface';

/* eslint-disable max-len */

export interface ILookUpProductRequest {
  /** The search request. */
  search: string;
}

export interface ILookUpProductResponse {
  /** The lookup response data. */
  data: IData[];
}

/**
 * Returns information about market events.
 * @async
 * @param {ILookUpProductRequest} request - The request object.
 * @param {string} [request.search] - The search request.
 * @returns {Promise<ILookUpProductResponse>} - Information about market events.
 */
export default ({search}: ILookUpProductRequest): Promise<ILookUpProductResponse> =>
  fetchWithAuth<ILookUpProductResponse>({path: `/market/lookup/${search}`});
