/**
 * @file Order enums.
 */

export enum CashMargin {
  CASH = 'CASH',
  MARGIN = 'MARGIN'
}

export enum ConditionFollowPrice {
  ASK = 'ASK',
  BID = 'BID',
  LAST = 'LAST'
}

export enum ConditionType {
  CONTINGENT_GTE = 'CONTINGENT_GTE',
  CONTINGENT_LTE = 'CONTINGENT_LTE'
}

export enum EgQual {
  EG_QUAL_INELIGIBLE_DUE_TO_CHANGEORDER = 'EG_QUAL_INELIGIBLE_DUE_TO_CHANGEORDER',
  EG_QUAL_INELIGIBLE_DUE_TO_IPO = 'EG_QUAL_INELIGIBLE_DUE_TO_IPO',
  EG_QUAL_INELIGIBLE_DUE_TO_SELF_DIRECTED = 'EG_QUAL_INELIGIBLE_DUE_TO_SELF_DIRECTED',
  EG_QUAL_INELIGIBLE_GATEWAY = 'EG_QUAL_INELIGIBLE_GATEWAY',
  EG_QUAL_INVALID_ORDER_TYPE = 'EG_QUAL_INVALID_ORDER_TYPE',
  EG_QUAL_NOT_A_MARKET_ORDER = 'EG_QUAL_NOT_A_MARKET_ORDER',
  EG_QUAL_NOT_AN_ELIGIBLE_SECURITY = 'EG_QUAL_NOT_AN_ELIGIBLE_SECURITY',
  EG_QUAL_NOT_IN_FORCE = 'EG_QUAL_NOT_IN_FORCE',
  EG_QUAL_OUTSIDE_GUARANTEED_PERIOD = 'EG_QUAL_OUTSIDE_GUARANTEED_PERIOD',
  EG_QUAL_QUALIFIED = 'EG_QUAL_QUALIFIED',
  EG_QUAL_SIZE_NOT_QUALIFIED = 'EG_QUAL_SIZE_NOT_QUALIFIED',
  EG_QUAL_UNSPECIFIED = 'EG_QUAL_UNSPECIFIED'
}

export enum EventName {
  CA_BOOKED = 'CA_BOOKED',
  CA_CANCELLED = 'CA_CANCELLED',
  CANCEL_REJECTED = 'CANCEL_REJECTED',
  CANCEL_REQUESTED = 'CANCEL_REQUESTED',
  DONE_TRADE_EXECUTED = 'DONE_TRADE_EXECUTED',
  IPO_ALLOCATED = 'IPO_ALLOCATED',
  MARKET_SENT_ACKNOWLEDGED = 'MARKET_SENT_ACKNOWLEDGED',
  OPEN_ORDER_ADJUSTED = 'OPEN_ORDER_ADJUSTED',
  OPTION_POSITION_ASSIGNED = 'OPTION_POSITION_ASSIGNED',
  ORDER_ADJUSTED = 'ORDER_ADJUSTED',
  ORDER_CANCELLED = 'ORDER_CANCELLED',
  ORDER_EXECUTED = 'ORDER_EXECUTED',
  ORDER_EXPIRED = 'ORDER_EXPIRED',
  ORDER_MODIFIED = 'ORDER_MODIFIED',
  ORDER_PLACED = 'ORDER_PLACED',
  ORDER_REJECTED = 'ORDER_REJECTED',
  ORDER_REVERSED = 'ORDER_REVERSED',
  ORDER_SENT_TO_BROKER_REVIEW = 'ORDER_SENT_TO_BROKER_REVIEW',
  REJECTION_REVERSAL = 'REJECTION_REVERSAL',
  REVERSE_CANCELLATION = 'REVERSE_CANCELLATION',
  REVERSE_EXPIRATION = 'REVERSE_EXPIRATION',
  SENT_TO_CMS = 'SENT_TO_CMS',
  SENT_TO_MARKET = 'SENT_TO_MARKET',
  SYSTEM_REJECTED = 'SYSTEM_REJECTED',
  UNSPECIFIED = 'UNSPECIFIED'
}

export enum MarginLevel {
  MARGIN_TRADING_ALLOWED_ON_OPTIONS = 'MARGIN_TRADING_ALLOWED_ON_OPTIONS',
  MARGIN_TRADING_ALLOWED_ON_PM = 'MARGIN_TRADING_ALLOWED_ON_PM',
  MARGIN_TRADING_ALLOWED = 'MARGIN_TRADING_ALLOWED',
  MARGIN_TRADING_NOT_ALLOWED = 'MARGIN_TRADING_NOT_ALLOWED',
  UNSPECIFIED = 'UNSPECIFIED'
}

export enum MFTransaction {
  BUY = 'BUY',
  SELL = 'SELL'
}

export enum OffsetType {
  TRAILING_STOP_CNST = 'TRAILING_STOP_CNST',
  TRAILING_STOP_PRCT = 'TRAILING_STOP_PRCT'
}

export enum OrderAction {
  BUY_CLOSE = 'BUY_CLOSE',
  BUY_OPEN = 'BUY_OPEN',
  BUY_TO_COVER = 'BUY_TO_COVER',
  BUY = 'BUY',
  EXCHANGE = 'EXCHANGE',
  SELL_CLOSE = 'SELL_CLOSE',
  SELL_OPEN = 'SELL_OPEN',
  SELL_SHORT = 'SELL_SHORT',
  SELL = 'SELL'
}

export enum OrderPriceType {
  HIDDEN_STOP_BY_LOWER_TRIGGER = 'HIDDEN_STOP_BY_LOWER_TRIGGER',
  HIDDEN_STOP = 'HIDDEN_STOP',
  LIMIT_ON_CLOSE = 'LIMIT_ON_CLOSE',
  LIMIT_ON_OPEN = 'LIMIT_ON_OPEN',
  LIMIT = 'LIMIT',
  MARKET_ON_CLOSE = 'MARKET_ON_CLOSE',
  MARKET_ON_OPEN = 'MARKET_ON_OPEN',
  MARKET = 'MARKET',
  NET_CREDIT = 'NET_CREDIT',
  NET_DEBIT = 'NET_DEBIT',
  NET_EVEN = 'NET_EVEN',
  STOP_LIMIT = 'STOP_LIMIT',
  STOP = 'STOP',
  TRAILING_STOP_CNST_BY_LOWER_TRIGGER = 'TRAILING_STOP_CNST_BY_LOWER_TRIGGER',
  TRAILING_STOP_CNST = 'TRAILING_STOP_CNST',
  TRAILING_STOP_PRCT_BY_LOWER_TRIGGER = 'TRAILING_STOP_PRCT_BY_LOWER_TRIGGER',
  TRAILING_STOP_PRCT = 'TRAILING_STOP_PRCT',
  UPPER_TRIGGER_BY_HIDDEN_STOP = 'UPPER_TRIGGER_BY_HIDDEN_STOP',
  UPPER_TRIGGER_BY_TRAILING_STOP_CNST = 'UPPER_TRIGGER_BY_TRAILING_STOP_CNST',
  UPPER_TRIGGER_BY_TRAILING_STOP_PRCT = 'UPPER_TRIGGER_BY_TRAILING_STOP_PRCT'
}

export enum OrderStatus {
  CANCEL_REQUESTED = 'CANCEL_REQUESTED',
  CANCELLED = 'CANCELLED',
  DO_NOT_EXERCISE = 'DO_NOT_EXERCISE',
  DONE_TRADE_EXECUTED = 'DONE_TRADE_EXECUTED',
  EXECUTED = 'EXECUTED',
  EXPIRED = 'EXPIRED',
  INDIVIDUAL_FILLS = 'INDIVIDUAL_FILLS',
  OPEN = 'OPEN',
  PARTIAL = 'PARTIAL',
  REJECTED = 'REJECTED'
}

export enum OrderTerm {
  FILL_OR_KILL = 'FILL_OR_KILL',
  GOOD_FOR_DAY = 'GOOD_FOR_DAY',
  GOOD_TILL_DATE = 'GOOD_TILL_DATE',
  GOOD_UNTIL_CANCEL = 'GOOD_UNTIL_CANCEL',
  IMMEDIATE_OR_CANCEL = 'IMMEDIATE_OR_CANCEL'
}

export enum OrderType {
  BUTTERFLY = 'BUTTERFLY',
  BUY_WRITES = 'BUY_WRITES',
  CONDOR = 'CONDOR',
  EQ = 'EQ',
  IRON_BUTTERFLY = 'IRON_BUTTERFLY',
  IRON_CONDOR = 'IRON_CONDOR',
  MF = 'MF',
  MMF = 'MMF',
  OPTN = 'OPTN',
  SPREADS = 'SPREADS'
}

export enum PositionQuantity {
  CASH = 'CASH',
  ENTIRE_POSITION = 'ENTIRE_POSITION',
  MARGIN = 'MARGIN'
}

export enum ReInvestOption {
  CURRENT_HOLDING = 'CURRENT_HOLDING',
  DEPOSIT = 'DEPOSIT',
  REINVEST = 'REINVEST',
}

export enum QuantityType {
  ALL_I_OWN = 'ALL_I_OWN',
  DOLLAR = 'DOLLAR',
  QUANTITY = 'QUANTITY'
}

export enum RoutingDestination {
  AMEX = 'AMEX',
  AUTO = 'AUTO',
  BOX = 'BOX',
  CBOE = 'CBOE',
  ISE = 'ISE',
  NOM = 'NOM',
  NYSE = 'NYSE',
  PHX = 'PHX'
}

export enum SecurityType {
  EQ = 'EQ',
  MF = 'MF',
  MMF = 'MMF',
  OPTN = 'OPTN'
}

export enum TransactionType {
  ATNM = 'ATNM',
  BUY_TO_COVER = 'BUY_TO_COVER',
  BUY = 'BUY',
  MF_EXCHANGE = 'MF_EXCHANGE',
  SELL_SHORT = 'SELL_SHORT',
  SELL = 'SELL'
}
