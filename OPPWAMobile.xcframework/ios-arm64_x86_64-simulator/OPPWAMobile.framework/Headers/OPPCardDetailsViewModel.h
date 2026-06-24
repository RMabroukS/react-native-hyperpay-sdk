//  © Copyright ACI Worldwide, Inc. 2018, 2026


#import <Foundation/Foundation.h>
#import "OPPCardDetailsProtocol.h"
@class OPPCheckoutProvider;
@class OPPToken;
@import SafariServices;
@class OPPCardDetailsModel;

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:

@interface OPPCardDetailsViewModel : NSObject

@property (nonatomic, nonnull) OPPCardDetailsModel *model;
@property (nonatomic, strong) UIViewController<OPPCardDetailsDataSource> *controller;

//UI
@property (nonatomic, nullable) UITextField *cardHolderField;
@property (nonatomic, nullable) UITextField *cardNumberField;
@property (nonatomic, nullable) UITextField *expiryDateField;
@property (nonatomic, nullable) UITextField *cvvField;
@property (nonatomic, nullable) UITextField *countryCodeField;
@property (nonatomic, nullable) UITextField *mobilePhoneField;

- (instancetype)init NS_UNAVAILABLE;
- (nullable instancetype)initWithCheckoutProvider:(OPPCheckoutProvider *)checkoutProvider
                                     paymentBrand:(NSString *)paymentBrand viewController:(UIViewController *)viewController;
- (nullable instancetype)initWithCheckoutProvider:(OPPCheckoutProvider *)checkoutProvider
                                            token:(OPPToken *)token viewController:(UIViewController *)viewController;

- (NSString *)paymentBrand;
- (nullable OPPToken *)token;
- (BOOL)isCardScanAvailable;
- (void)startCardScan;
- (void)cancelCheckout;
- (void)changePaymentBrand:(nonnull NSString *)paymentBrand;
- (void)storePaymentDetails:(BOOL)store;
- (void)updateBillingAddress:(nullable OPPBillingAddress *)billingAddress;
- (void)updateNumberOfInstallments:(NSUInteger)numberOfInstallments;
- (void)submitPaymentTransactionWithCompletionHandler:(nullable void (^)(BOOL result))completionHandler;
- (void)focusOnTextField:(UITextField *)textField;

@end

NS_ASSUME_NONNULL_END
