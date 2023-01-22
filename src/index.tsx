import type {
  CreateTransactionResponseType,
  CreateTransactionParams,
  Config,
  ApplyPayParams,
} from '../lib/typescript'
import {
  getPaymentStatus
} from './paymentStatus'
import type { ApplePayCallback } from '../'
import { HyperPaySDK, eventEmitter } from './utils';

export function init(params: Config): Config {
  return HyperPaySDK.setup(params);
}

export function createPaymentTransaction(params: CreateTransactionParams, onProgress?: (isProgress: boolean) => void):
  Promise<CreateTransactionResponseType> {
  if (onProgress) {
    eventEmitter.removeAllListeners("onProgress")
    const _event = eventEmitter.addListener('onProgress', (isLoading: boolean) => {
      onProgress(isLoading)
      if (!isLoading) _event.remove()
    });
  }
  return HyperPaySDK.createPaymentTransaction(params);
}



export function applePay(params: ApplyPayParams,
  onProgress?: (isProgress: boolean) => void): Promise<ApplePayCallback> {

  if (onProgress) {
    const _event = eventEmitter.addListener('onProgress', (isLoading: boolean) => {
      onProgress(isLoading)
      if (!isLoading) _event.remove()
    });
  }

  return HyperPaySDK.applePay(params);
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