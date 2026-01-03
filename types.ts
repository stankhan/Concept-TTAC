
export enum FlowStep {
  STOREFRONT = 'STOREFRONT',
  PURCHASE_CONFIRM = 'PURCHASE_CONFIRM',
  ADD_CARD_MENU = 'ADD_CARD_MENU',
  TAP_TO_ADD = 'TAP_TO_ADD',
  CARD_DETAILS = 'CARD_DETAILS',
  BANK_LOADING = 'BANK_LOADING',
  BILLING_ADDRESS = 'BILLING_ADDRESS',
  VERIFY_INTRO = 'VERIFY_INTRO',
  REMINDER_CONFIRM = 'REMINDER_CONFIRM',
  ISSUER_TERMS = 'ISSUER_TERMS',
  VERIFY_METHOD = 'VERIFY_METHOD',
  VERIFY_CODE = 'VERIFY_CODE',
  FINAL_PROCESSING = 'FINAL_PROCESSING',
  SUCCESS = 'SUCCESS',
  BANK_LOGIN = 'BANK_LOGIN',
  CARD_SELECTION = 'CARD_SELECTION',
  SAVE_CONFIRM = 'SAVE_CONFIRM',
  VERIFIED_CONFIRM = 'VERIFIED_CONFIRM'
}

export interface CardData {
  id?: string;
  number: string;
  expiry: string;
  holder: string;
  type: 'visa' | 'mastercard' | 'amex';
}

export interface Bank {
  id: string;
  name: string;
  logo: string;
}
