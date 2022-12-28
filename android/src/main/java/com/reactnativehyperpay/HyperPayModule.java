package com.reactnativehyperpay;

import android.content.Context;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.oppwa.mobile.connect.exception.PaymentError;
import com.oppwa.mobile.connect.exception.PaymentException;
import com.oppwa.mobile.connect.payment.BrandsValidation;
import com.oppwa.mobile.connect.payment.CheckoutInfo;
import com.oppwa.mobile.connect.payment.ImagesRequest;
import com.oppwa.mobile.connect.payment.PaymentParams;
import com.oppwa.mobile.connect.payment.card.CardPaymentParams;
import com.oppwa.mobile.connect.provider.Connect;
import com.oppwa.mobile.connect.provider.ITransactionListener;
import com.oppwa.mobile.connect.provider.OppPaymentProvider;
import com.oppwa.mobile.connect.provider.Transaction;

@ReactModule(name = HyperPayModule.NAME)
public class HyperPayModule extends ReactContextBaseJavaModule {
    private Context appContext;
    private String shopperResultURL;
    private String merchantIdentifier;
    private String countryCode;
    private String mode;
    public static final String NAME = "HyperPay";

    public HyperPayModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    // Example method
    // See https://reactnative.dev/docs/native-modules-android

    @ReactMethod
    public ReadableMap setup(ReadableMap params, Promise promise) {
        if (!params.getString("shopperResultURL").isEmpty())
            shopperResultURL = params.getString("shopperResultURL");
        if (!params.getString("merchantIdentifier").isEmpty())
            merchantIdentifier = params.getString("merchantIdentifier");
        if (!params.getString("countryCode").isEmpty())
            countryCode = params.getString("countryCode");
        if (!params.getString("mode").isEmpty())
            countryCode = params.getString("mode");
        return params;
    }

    @ReactMethod
    public void createPaymentTransaction(ReadableMap params, Promise promise) {

        // PaymentParams paymentParams = new CardPaymentParams(
        // params.getString("checkoutID"),
        // params.getString("paymentBrand"),
        // params.getString("cardNumber"),
        // params.getString("holderName") ,
        // params.getString("expiryMonth"),
        // params.getString("expiryYear"),
        // params.getString("cvv")
        // );

        // if (!params.getString("shopperResultURL").isEmpty()){
        // shopperResultURL=params.getString("shopperResultURL");
        // }
        //
        // paymentParams.setShopperResultUrl(shopperResultURL);
        //
        // Transaction transaction = null;
        // ITransactionListener transactionListener = null;
        //
        //
        // try {
        // OppPaymentProvider paymentProvider = new OppPaymentProvider(appContext,
        // Connect.ProviderMode.TEST);
        //
        // if (mode=="LiveMode"){
        // paymentProvider.setProviderMode(Connect.ProviderMode.LIVE);
        // }
        //
        // transaction = new Transaction(paymentParams);
        // paymentProvider.submitTransaction(transaction, transactionListener);
        // promise.resolve("Test");
        //

        //
        // } catch (PaymentException e) {
        // promise.reject(e);
        // /* error occurred */
        // }
        Log.d("params", params.toString());

    }

    public static native int nativeMultiply(int a, int b);

}
