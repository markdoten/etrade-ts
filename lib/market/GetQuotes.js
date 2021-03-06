"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file View Portfolio.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns the portfolio information for a selected brokerage account.
 * @async
 * @param request - The request object.
 * @param [request.symbols] - One or more (comma-separated) symbols for equities or options, up to a maximum of 25. Symbols for equities are simple, for example, GOOG. Symbols for options are more complex, consisting of six elements separated by colons, in this format: underlier:year:month:day:optionType:strikePrice.
 * @returns {Promise<IGetQuotesResponse>} - Portfolio information for a selected brokerage account.
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definition/getQuotes|Get Quotes Docs}
 */
exports.default = (_a) => {
    var { symbols } = _a, query = (0, tslib_1.__rest)(_a, ["symbols"]);
    return session_1.default.request({
        path: `/market/quote/${symbols.join(',')}`,
        query
    });
};
//# sourceMappingURL=GetQuotes.js.map