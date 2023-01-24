package com.reactnativehyperpay;

import android.app.Activity;
import android.content.Context;
import android.util.Log;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;
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
import com.oppwa.mobile.connect.provider.ThreeDSWorkflowListener;
import com.oppwa.mobile.connect.provider.Transaction;
import com.oppwa.mobile.connect.provider.TransactionType;

@ReactModule(name = HyperPayModule.NAME)
public class HyperPayModule extends ReactContextBaseJavaModule implements ITransactionListener {
    public static final String NAME = "HyperPay";

    private Context appContext;
    private Promise promisePaymentTransaction;
    private String shopperResultURL;
    private String merchantIdentifier;
    private String countryCode;
    private String mode;

    public HyperPayModule(ReactApplicationContext reactContext) {
        super(reactContext);
        appContext = reactContext.getApplicationContext();
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableMap setup(ReadableMap params) {
        WritableMap config = Arguments.createMap();
        if (params.hasKey("shopperResultURL"))
            shopperResultURL = params.getString("shopperResultURL");
        if (params.hasKey("merchantIdentifier"))
            merchantIdentifier = params.getString("merchantIdentifier");
        if (params.hasKey("countryCode"))
            countryCode = params.getString("countryCode");
        if (params.hasKey("mode"))
            mode = params.getString("mode");
        config.putString("shopperResultURL", shopperResultURL);
        config.putString("merchantIdentifier", merchantIdentifier);
        config.putString("countryCode", countryCode);
        config.putString("mode", mode);
        return config;
    }

    @ReactMethod
    public void createPaymentTransaction(ReadableMap params, Promise promise) {
        promisePaymentTransaction = promise;
        this.emitListeners("onProgress", true);
        try {
            PaymentParams paymentParams = new CardPaymentParams(
                    params.getString("checkoutID"),
                    params.getString("paymentBrand"),
                    params.getString("cardNumber"),
                    params.getString("holderName"),
                    params.getString("expiryMonth"),
                    params.getString("expiryYear"),
                    params.getString("cvv"));

            if (params.hasKey("shopperResultURL")) {
                shopperResultURL = params.getString("shopperResultURL");
            }
            paymentParams.setShopperResultUrl(shopperResultURL);
            Transaction transaction = null;

            try {
                OppPaymentProvider paymentProvider = new OppPaymentProvider(appContext, Connect.ProviderMode.TEST);
                paymentProvider.setThreeDSWorkflowListener(new ThreeDSWorkflowListener() {
                    @Override
                    public Activity onThreeDSChallengeRequired() {
                        return getCurrentActivity();
                    }
                });

                if (mode.equals("LiveMode")) {
                    paymentProvider.setProviderMode(Connect.ProviderMode.LIVE);
                }
                transaction = new Transaction(paymentParams);
                paymentProvider.submitTransaction(transaction, this);
            } catch (PaymentException e) {
                this.emitListeners("onProgress", false);
                promisePaymentTransaction.reject(e);
            }
        } catch (PaymentException e) {
            this.emitListeners("onProgress", false);
            promisePaymentTransaction.reject(e);
        }
    }

    private void emitListeners(String eventName, boolean isLoading) {
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("onProgress", isLoading);
    }

    @Override
    public void transactionCompleted(@NonNull Transaction transaction) {
        this.emitListeners("onProgress", false);

        WritableMap paymentResponse = Arguments.createMap();
        paymentResponse.putString("checkoutId", transaction.getPaymentParams().getCheckoutId());

        if (transaction.getTransactionType() == TransactionType.SYNC) {
            paymentResponse.putString("status", "completed");
        } else {
            paymentResponse.putString("status", "pending");
            paymentResponse.putString("redirectURL", transaction.getRedirectUrl());
        }

        promisePaymentTransaction.resolve(paymentResponse);
    }

    @Override
    public void transactionFailed(@NonNull Transaction transaction, @NonNull PaymentError paymentError) {
        this.emitListeners("onProgress", false);
        promisePaymentTransaction.reject(paymentError.getErrorInfo());
    }

    @Override
    public void brandsValidationRequestSucceeded(@NonNull BrandsValidation brandsValidation) {
        ITransactionListener.super.brandsValidationRequestSucceeded(brandsValidation);
    }

    @Override
    public void brandsValidationRequestFailed(@NonNull PaymentError paymentError) {
        ITransactionListener.super.brandsValidationRequestFailed(paymentError);
    }

    @Override
    public void paymentConfigRequestSucceeded(@NonNull CheckoutInfo checkoutInfo) {
        Log.d("paymentCond", checkoutInfo.getResourcePath());
        ITransactionListener.super.paymentConfigRequestSucceeded(checkoutInfo);
    }

    @Override
    public void paymentConfigRequestFailed(@NonNull PaymentError paymentError) {
        ITransactionListener.super.paymentConfigRequestFailed(paymentError);
    }

    @Override
    public void imagesRequestSucceeded(@NonNull ImagesRequest imagesRequest) {
        ITransactionListener.super.imagesRequestSucceeded(imagesRequest);
    }

    @Override
    public void imagesRequestFailed() {
        ITransactionListener.super.imagesRequestFailed();
    }

    @Override
    public void binRequestSucceeded(@NonNull String[] strings) {
        ITransactionListener.super.binRequestSucceeded(strings);
    }

    @Override
    public void binRequestFailed() {
        ITransactionListener.super.binRequestFailed();
    }

}
