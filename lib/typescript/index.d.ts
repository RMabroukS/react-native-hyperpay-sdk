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
export type ApplePayCallback = {
    /** Shopper was redirected to the issuer web page.
     Request payment status when shopper returns to the app using transaction.resourcePath or just checkout id. 
     */
    redirectURL?: string;
    /**  Request payment status for the synchronous transaction from your server using transactionPath.resourcePath or just checkout id.*/
    resourcePath?: string;
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
       * @returns ```Promise<{ redirectURL?: string,
        resourcePath?: string}>```
       */
    static applePay(checkoutID: string): Promise<ApplePayCallback>;

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

