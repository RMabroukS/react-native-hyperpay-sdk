import type { CountryCodes } from './CountryCodes';
import { PaymentStatus } from './PaymentStatus';
import type { SupportedNetworks } from './SupportedNetworks';

export type CreateTransactionResponseType = {
    status: 'pending' | 'rejected' | 'risk' | 'chargeback' | 'declines' | 'successfully',
    checkoutId: string,
    redirectURL: string
}
export interface Config {
    shopperResultURL: string;
    /**
    * required for apple pay
    */
    countryCode?: keyof CountryCodes;
    /**
     * required for apple pay
     */
    merchantIdentifier?: string;

    mode?: "TestMode" | "LiveMode";

    /**
     *  set up supported payment networks for apple pay
    * @Platform IOS Only 
    */
    supportedNetworks?: Array<SupportedNetworks>

}

export type CreateTransactionParams = {
    paymentBrand: string,
    holderName: string,
    cardNumber: string,
    expiryYear: string,
    expiryMonth: string,
    cvv: string,
    checkoutID: string,
    shopperResultURL?: string,
}

export default class HyperPay {
    /**
       * @param  {string} shopperResultURL
       * @param  {CountryCodes} countryCode 
       * @param  {string} merchantIdentifier
       * @param  {string} mode
       * @param  {SupportedNetworks[]} supportedNetworks 
       * @returns Config
       */

    static init(params: Config): Config

    /**
       * @param  {string} checkoutID
       * @returns ```Promise<string>```
       */
    static applePay(checkoutID: string): Promise<string>;

    /**
     * @param  {string} paymentBrand
     * @param  {string} holderName
     * @param  {string} cardNumber
     * @param  {string} expiryYear
     * @param  {string} expiryMonth
     * @param  {string} cvv
     * @param  {string} checkoutID
     * @param  {string} shopperResultURL
     * 
     * @returns  ```Promise<{ status: 'pending' | 'rejected' | 'risk' | 'chargeback' | 'declines' | 'successfully',
         checkoutId: string,
         redirectURL: string }>``` 
     */

    static createPaymentTransaction(params: CreateTransactionParams): Promise<CreateTransactionResponseType>;

    /**
       * @param  {string} statusCode
       * @returns```{ code: string, description: string,   status: 'successfully' | 
       * 'rejected' | 'Chargeback' | 'pending' | 'error' }``` 
    */

    static getPaymentStatus(status: string): PaymentStatus

}

