# react-native-hyperpay-sdk

A React Native SDK for integrating [HyperPay](https://www.hyperpay.com/) — a leading payment gateway for the Middle East and North Africa (MENA) region — into iOS and Android applications. Supports card payments (VISA, Mastercard, MADA, AMEX, and 40+ brands), Apple Pay, and real-time payment status resolution with full TypeScript support.

[![npm version](https://img.shields.io/npm/v/react-native-hyperpay-sdk.svg)](https://www.npmjs.com/package/react-native-hyperpay-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](https://github.com/RMabroukS/react-native-hyperpay-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> **Keywords:** react-native payment gateway, HyperPay React Native, MADA payment, Apple Pay React Native, MENA payment integration, react-native card payment, Saudi Arabia payment gateway, PCI-compliant mobile payments, cross-platform payment SDK

---

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
  - [Card Payment](#card-payment)
  - [Apple Pay](#apple-pay-ios-only)
  - [Check Payment Status](#check-payment-status)
- [Track Loading State](#track-loading-state)
- [Supported Payment Brands](#supported-payment-brands)
- [Android Configuration](#android-configuration-optional)
- [API Reference](#api-reference)
- [TypeScript Types](#typescript-types)
- [Example App](#example-app)
- [Contributing](#contributing)
- [License](#license)

---

## Requirements

| Dependency   | Minimum Version          |
|--------------|--------------------------|
| React Native | >= 0.63                  |
| iOS          | >= 10.0                  |
| Android SDK  | >= 21 (Android 5.0+)     |
| Xcode        | >= 16                    |

---

## Installation

```sh
# npm
npm install react-native-hyperpay-sdk

# yarn
yarn add react-native-hyperpay-sdk
```

### iOS

Install the native CocoaPods dependencies:

```sh
cd ios && pod install
```

### Android

No additional steps required — React Native auto-linking handles native module registration on Android.

> **Note:** This package is **not** compatible with Expo managed workflow. Use a bare or custom dev client workflow instead.

---

## Setup

Before initiating any payment transaction, call `HyperPay.init()` once — ideally in your app entry point or when your payment screen mounts. This registers your merchant configuration with the native SDK.

```ts
import HyperPay from 'react-native-hyperpay-sdk';

HyperPay.init({
  shopperResultURL: 'your.app.scheme://payment',   // deep link URL your app handles after payment
  countryCode: 'SA',                               // ISO 3166-1 alpha-2 country code
  merchantIdentifier: 'merchant.com.yourapp',      // Apple Pay merchant identifier (iOS only)
  mode: 'TestMode',                                // 'TestMode' | 'LiveMode'
  companyName: 'Your Company',                     // displayed in Apple Pay sheet (iOS only)
  supportedNetworks: ['visa', 'masterCard'],        // Apple Pay supported networks (iOS only)
});
```

### Config Options

| Option               | Type                          | Required | Description                                                                   |
|----------------------|-------------------------------|----------|-------------------------------------------------------------------------------|
| `shopperResultURL`   | `string`                      | **Yes**  | Deep link URL your app handles after the payment flow completes               |
| `countryCode`        | `CountryCodes`                | No       | ISO 3166-1 alpha-2 country code — required when using Apple Pay               |
| `merchantIdentifier` | `string`                      | No       | Apple Pay merchant identifier registered in your Apple Developer account (iOS only) |
| `mode`               | `'TestMode' \| 'LiveMode'`    | No       | Payment environment — defaults to `'TestMode'`                                |
| `companyName`        | `string`                      | No       | Merchant name displayed in the Apple Pay sheet as "Pay `<companyName>`" (iOS only) |
| `supportedNetworks`  | `SupportedNetworks[]`         | No       | Card networks accepted by Apple Pay (e.g. `'visa'`, `'masterCard'`, `'mada'`) (iOS only) |

---

## Usage

> Your backend server must create a HyperPay checkout session and return a `checkoutID` before calling any payment method.

### Card Payment

Initiate a card payment by passing the cardholder details and the `checkoutID` obtained from your server. Supports VISA, Mastercard, MADA, AMEX, and all other brands listed under [Supported Payment Brands](#supported-payment-brands).

```ts
import HyperPay from 'react-native-hyperpay-sdk';

const result = await HyperPay.createPaymentTransaction({
  paymentBrand: 'VISA',                           // payment brand / card network
  holderName: 'John Doe',                         // cardholder full name
  cardNumber: '4111111111111111',                  // PAN (card number)
  expiryYear: '2027',                             // 4-digit expiry year
  expiryMonth: '12',                              // 2-digit expiry month
  cvv: '123',                                     // card security code
  checkoutID: '<checkout_id_from_your_server>',   // server-generated checkout session ID
  shopperResultURL: 'your.app.scheme://payment',  // optional — overrides init value
});

// result shape:
// {
//   status: 'successfully' | 'pending' | 'rejected' | 'risk' | 'chargeback' | 'declines',
//   checkoutId: string,   // the checkout session ID
//   redirectURL: string   // redirect URL for 3DS or async flows
// }
```

### Apple Pay (iOS Only)

Launch the native Apple Pay payment sheet. Requires Apple Pay to be configured in `HyperPay.init()` and enabled in Xcode Signing & Capabilities.

```ts
import HyperPay from 'react-native-hyperpay-sdk';

const result = await HyperPay.applePay({
  checkoutID: '<checkout_id_from_your_server>',
  companyName: 'Your Company',   // optional — overrides init value
  amount: '100.00',              // optional — displayed in the Apple Pay sheet
});

// result shape:
// {
//   redirectURL?: string,   // async/redirect transaction — verify after shopper returns
//   resourcePath?: string   // synchronous transaction — verify immediately from your server
// }
```

### Check Payment Status

Resolve any HyperPay numeric result code into a structured, human-readable status object. Covers all documented success, pending, soft-decline, and rejection codes.

```ts
import HyperPay from 'react-native-hyperpay-sdk';

const status = HyperPay.getPaymentStatus('000.000.000');
// {
//   code: '000.000.000',
//   description: 'Transaction succeeded',
//   status: 'successfully'
// }
```

---

## Track Loading State

### With the Hook (Recommended)

`useTransactionLoading` returns `true` while any HyperPay transaction is actively being processed. It subscribes to native SDK events, so no manual state management is needed.

```tsx
import React from 'react';
import { View, Button, ActivityIndicator } from 'react-native';
import HyperPay, { useTransactionLoading } from 'react-native-hyperpay-sdk';

function PaymentScreen() {
  const isLoading = useTransactionLoading();

  const handlePay = async () => {
    await HyperPay.createPaymentTransaction({ /* ...params */ });
  };

  return (
    <View>
      {isLoading && <ActivityIndicator size="large" />}
      <Button title="Pay Now" onPress={handlePay} disabled={isLoading} />
    </View>
  );
}
```

### With the `onProgress` Callback

For cases where you need the loading state outside of a React component, pass an `onProgress` callback directly:

```ts
await HyperPay.createPaymentTransaction(params, (isLoading) => {
  console.log('Transaction in progress:', isLoading);
});

// Same for Apple Pay:
await HyperPay.applePay(params, (isLoading) => {
  console.log('Apple Pay in progress:', isLoading);
});
```

---

## Supported Payment Brands

The `paymentBrand` field accepts any value from the `CardAccountBrands` type. Common brands include:

| Brand           | Processing  | Region / Notes              |
|-----------------|-------------|-----------------------------|
| `VISA`          | Synchronous | Global                      |
| `MASTER`        | Synchronous | Global                      |
| `AMEX`          | Synchronous | Global                      |
| `MADA`          | Synchronous | Saudi Arabia (KSA)          |
| `MEEZA`         | Async       | Egypt                       |
| `JCB`           | Synchronous | Japan                       |
| `DISCOVER`      | Synchronous | Global                      |
| `MAESTRO`       | Synchronous | Europe                      |
| `DANKORT`       | Synchronous | Denmark                     |
| `ELO`           | Synchronous | Brazil                       |
| `GOOGLEPAY`     | Synchronous | Android                     |
| `APPLEPAY`      | Synchronous | iOS                         |
| `BCMC`          | Async       | Belgium                     |
| `VISADEBIT`     | Synchronous | Global                      |
| `MASTERDEBIT`   | Synchronous | Global                      |

For the complete list of 40+ supported brands, see [CardAccountBrands.ts](lib/typescript/CardAccountBrands.ts).

---

## Android Configuration (Optional)

To override the default Android SDK build versions used by the library, add the following to your root `android/build.gradle`:

```gradle
ext {
    HyperPay_compileSdkVersion = 33
    HyperPay_minSdkVersion     = 21
    HyperPay_targetSdkVersion  = 33
}
```

---

## TypeScript Types

All types are exported from the package root and can be imported directly:

```ts
import type {
  Config,
  CreateTransactionParams,
  CreateTransactionResponseType,
  ApplyPayParams,
  ApplePayCallback,
  PaymentStatus,
} from 'react-native-hyperpay-sdk';
```

---

## Example App

A fully runnable example application is included in the [`example/`](example/) directory, demonstrating card payment and Apple Pay integration end-to-end.

```sh
yarn bootstrap        # install all dependencies and CocoaPods
yarn example android  # run on a connected Android device or emulator
yarn example ios      # run on a connected iOS device or simulator
```

---

## API Reference

### `HyperPay.init(config: Config): Config`

Registers your merchant configuration with the native HyperPay SDK. Must be called once before invoking any payment method. Returns the applied config.

### `HyperPay.createPaymentTransaction(params, onProgress?): Promise<CreateTransactionResponseType>`

Initiates a card payment transaction through the HyperPay payment gateway. Accepts card details and a server-issued `checkoutID`. Returns a promise that resolves with the transaction outcome (`status`, `checkoutId`, `redirectURL`).

### `HyperPay.applePay(params, onProgress?): Promise<ApplePayCallback>`

Launches the native Apple Pay payment sheet using the HyperPay backend. **iOS only.** Returns a promise resolving with a `resourcePath` (synchronous) or `redirectURL` (asynchronous) for server-side status verification.

### `HyperPay.getPaymentStatus(code: string): PaymentStatus`

Maps a HyperPay numeric result code (e.g. `"000.000.000"`) to a structured `{ code, description, status }` object. Covers the full range of success, pending, soft-decline, 3DS rejection, and system-error codes documented by HyperPay.

### `useTransactionLoading(): boolean`

React hook that subscribes to native SDK events and returns `true` while any HyperPay transaction is actively being processed. Automatically resets to `false` when the transaction completes or fails.

---

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on reporting bugs, proposing features, and submitting pull requests. Please follow the conventional commit format when writing commit messages.

---

## License

MIT — see [LICENSE](LICENSE).
