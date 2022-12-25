import type {
  CreateTransactionResponseType,
  CreateTransactionParams,
  Config,
} from '../lib/typescript'
import {
  getPaymentStatus
} from './paymentStatus'
import type { ApplePayCallback } from '../'
import { HyperPaySDK, eventEmitter } from './utils';

export function init(params: Config): Config {
  return HyperPaySDK.setup(params);
}

export function createPaymentTransaction(params: CreateTransactionParams):
  Promise<CreateTransactionResponseType> {
  return HyperPaySDK.createPaymentTransaction(params);
}



export function applePay(checkoutID: string,
  onProgress?: (isProgress: boolean) => void): Promise<ApplePayCallback> {

  if (onProgress) {
    const _event = eventEmitter.addListener('onProgress', (isLoading: boolean) => {
      onProgress(isLoading)
      if (!isLoading) _event.remove()
    });
  }

  return HyperPaySDK.applePay(checkoutID);
}

const Hyperpay = {
  init,
  applePay,
  createPaymentTransaction,
  getPaymentStatus,
}
export {
  useTransactionLoading
} from './hooks'


export default Hyperpay