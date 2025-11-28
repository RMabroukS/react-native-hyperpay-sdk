//  © Copyright ACI Worldwide, Inc. 2018, 2025

@import UIKit;
@import SafariServices;
#import "OPPCheckoutProvider.h"
#import "OPPPaymentBrand.h"
@class OPPPaymentParams;
@class OPPPaymentProvider;
@class OPPCheckoutInfo;
@class OPPToken;

/// :nodoc:
NS_ASSUME_NONNULL_BEGIN
@interface OPPCheckoutProvider (Server) <SFSafariViewControllerDelegate>

/** Requests checkout info and saves in shared checkout details. */
+ (void)cps_obtainCheckoutInfoCompletionHandler:(void (^)(NSError * _Nullable error))completion;

/** Prepare and merge brands, load brands validations and image urls. */
+ (void)cps_initCheckoutWithCompletion:(void (^)(NSError * _Nullable error))completion;

/** Requests brand validations and saves in shared checkout details. */
+ (void)cps_initValidatorForPaymentBrands:(NSArray<OPPPaymentBrand> *)paymentBrands completion:(void (^)(NSError * _Nullable error))completion;

/** Requests urls for images and saves in shared image loader. */
+ (void)cps_initImageLoaderForPaymentBrands:(NSArray<OPPPaymentBrand> *)paymentBrands provider:(OPPPaymentProvider *)provider completion:(void (^)(NSError * _Nullable error))completion;

/** Tries to send transaction, transaction can be aborted in delegate. If current displaying view controller should be dissmissed after transaction submission, pass it in currentVC parameter, otherwise pass nil. */
- (void)cps_trySendTransactionWithPaymentParams:(OPPPaymentParams *)paymentParams dismissCurrentVC:(nullable UIViewController<SFSafariViewControllerDelegate> *)currentVC;

/** Sends transaction to Server without calling callbacks. If current displaying view controller should be dissmissed after transaction submission, pass it in currentVC parameter, otherwise pass nil. */
- (void)cps_sendTransactionWithPaymentParams:(OPPPaymentParams *)paymentParams dismissCurrentVC:(nullable UIViewController<SFSafariViewControllerDelegate> *)currentVC;

/** Creates payment params for payment brand which does not require custom UI to be presented */
- (OPPPaymentParams *)cps_createPaymentParamsWithoutUiForPaymentBrand:(NSString *)paymentBrand token:(nullable OPPToken *)token error:(NSError **)error;

/** Updates payment params with provided checkout ID. Logs changes if checkout ID differs. */
- (void)cps_updatePaymentParams:(OPPPaymentParams *)paymentParams checkoutID:(NSString *)checkoutID;

/** Creates a transaction with specified payment params. Applies checkoutInfo settings to update transaction. */
- (OPPTransaction *)cps_prepareTransactionWithPaymentParams:(OPPPaymentParams *)paymentParams;

/// :nodoc:
- (void)cps_closeTransactionProcessing:(nonnull OPPPaymentParams *)paymentParams
                      onViewController:(nonnull UIViewController *)viewController;

/// :nodoc:
- (void)cps_updateCheckoutIdWithTransaction:(nonnull OPPTransaction *)transaction currentVC:(nonnull UIViewController *)currentVC;

/** Dismiss checkout view controller with completion. */
+ (void)cps_dismissViewController:(nullable UIViewController *)viewController completion:(void (^)(void))completion;

/// :nodoc:
- (void)cpu_forceCloseCheckoutUI;
@end
NS_ASSUME_NONNULL_END
