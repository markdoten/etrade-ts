"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Preview Order.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Submit an order request for preview before placing it.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<IPreviewOrderResponse>} - Order details.
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definition/orderPreview|Preview Order Docs}
 */
exports.default = (_a) => {
    var { accountIdKey } = _a, PreviewOrderRequest = (0, tslib_1.__rest)(_a, ["accountIdKey"]);
    return session_1.default.request({
        body: { PreviewOrderRequest },
        method: 'POST',
        path: `/accounts/${accountIdKey}/orders/preview`
    });
};
//# sourceMappingURL=PreviewOrder.js.map