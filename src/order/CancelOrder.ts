/**
 * @file Cancel Order.
 */
import {fetchWithAuth} from '../session';
import type {IMessages} from '../interface';

/* eslint-disable max-len */

export interface ICancelOrderRequest {
  /** The unique account key. Retrievable by calling the List Accounts API. */
  accountIdKey: string;
  /** Order confirmation Id for the order placed. */
  orderId: number;
}

export interface ICancelOrderResponse {
  /** The numeric account ID for the cancelled order. */
  accountId: string;
  /** The time, in Epoch time, that the cancel request was submitted. */
  cancelTime: number;
  /** The messages relating to the order cancellation. */
  messages: IMessages;
  /** The order ID. */
  orderId: number;
}

/**
 * Cancel an existing order.
 * @async
 * @param {ICancelOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<ICancelOrderResponse>} - Order status.
 */
export const CancelOrder = ({
  accountIdKey,
  orderId
}: ICancelOrderRequest): Promise<ICancelOrderResponse> =>
  fetchWithAuth<ICancelOrderResponse>({
    body: {orderId},
    method: 'PUT',
    path: `/accounts/${accountIdKey}/orders/cancel`
  });
