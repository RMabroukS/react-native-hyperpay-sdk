# react-native-hyperpay-sdk

hyperpay

## Installation

```sh
npm i react-native-hyperpay-sdk
```

## Usage

```js
import hyperPay from 'react-native-hyperpay-sdk'


// the firt step , set default configiration 
// 1- shopperResultURL to redirect to this url after the payment completed
// 2- select your country code from list
// 3- merchantIdentifier is for apply pay only 
hyperPay.setConfig({
shopperResultURL:"shopperResultURL",
countryCode:"SA",
merchantIdentifier:"merchantIdentifier",
mode:"TestMode"
})
// ...
// to pay with apple 
const result = await hyperPay.applePay("CheckoutId")

// to pay with any brand
 const result=await hyperPay.createPaymentTransaction(
     { paymentBrand: "VISA",
     holderName: "Test Test",
     cardNumber: '4111111111111111',
     expiryYear: '2027',
     expiryMonth: '12',
     cvv: '123',
     checkoutID: `${res.data?.checkout_id}`,
     shopperResultURL: "[YOUR_APP_IDENTIFIER]://[URL_SCHEMES]" 
      })
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
