import {
  NativeModules,
  Platform
} from 'react-native';
import type {
  CreateTransactionResponseType,
  CreateTransactionParams,
  Config,
} from '../lib/typescript'
import {
  getPaymentStatus
} from './paymentStatus'
import type { ApplePayCallback } from '../'
const LINKING_ERROR =
  `The package 'react-native-hyperpay-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const HyperPaySDK = NativeModules.HyperPay
  ? NativeModules.HyperPay
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );
export function init(params: Config): Config {
  return HyperPaySDK.setup(params);
}

export function createPaymentTransaction(params: CreateTransactionParams):
  Promise<CreateTransactionResponseType> {
  return HyperPaySDK.createPaymentTransaction(params);
}


export function applePay(checkoutID: string): Promise<ApplePayCallback> {
  return HyperPaySDK.applePay(checkoutID);
}

const Hyperpay = {
  init,
  applePay,
  createPaymentTransaction,
  getPaymentStatus
}


export default Hyperpay