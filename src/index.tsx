import { NativeModules, Platform } from 'react-native';
import type { CreateTransactionResponseType, CreateTransactionParams, ConfigType } from '../lib/typescript'
const LINKING_ERROR =
  `The package 'react-native-hyperpay' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const HyperPay = NativeModules.HyperPay
  ? NativeModules.HyperPay
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );


export function createPaymentTransaction(params: CreateTransactionParams): Promise<CreateTransactionResponseType> {
  return HyperPay.createPaymentTransaction(params);
}

export function setConfig(params: ConfigType): ConfigType {
  return HyperPay.setConfig(params);
}


export function applePay(checkoutID: string): Promise<any> {
  return HyperPay.applePay(checkoutID);
}
