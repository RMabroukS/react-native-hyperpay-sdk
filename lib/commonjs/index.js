"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HyperPay = { init, createPaymentTransaction, applePay };

var _reactNative = require("react-native");

const LINKING_ERROR = `The package 'react-native-hyperpay-sdk' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const HyperPaySDK = _reactNative.NativeModules.HyperpaySdk ? _reactNative.NativeModules.HyperpaySdk : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }

});

function init(params) {
  return HyperPaySDK.setup(params);
}

function createPaymentTransaction(params) {
  return HyperPaySDK.createPaymentTransaction(params);
}

function applePay(checkoutID) {
  return HyperPaySDK.applePay(checkoutID)
}