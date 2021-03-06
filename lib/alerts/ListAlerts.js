"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file List Alerts.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns a list of alerts.
 * @async
 * @param query - The request object.
 * @returns {Promise<IListAlertsResponse>} - List of alerts.
 * @see {@link https://apisb.etrade.com/docs/api/user/api-alert-v1.html#/definition/getAlertsInbox|List Alerts Docs}
 */
exports.default = (query) => session_1.default.request({ path: '/user/alerts', query });
//# sourceMappingURL=ListAlerts.js.map