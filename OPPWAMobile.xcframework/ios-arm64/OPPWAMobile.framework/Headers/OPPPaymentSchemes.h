//  © Copyright ACI Worldwide, Inc. 2018, 2026

#import <Foundation/Foundation.h>
#import "OPPCheckoutProvider.h"

@class OPPToken;
@class OPPPaymentParams;

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:

@interface OPPPaymentSchemes : NSObject
- (nullable instancetype)initWithCheckoutProvider:(nonnull OPPCheckoutProvider *)checkoutProvider;
- (void)obtainCheckoutInfoCompletion:(void (^)(NSError * _Nullable error))completion;
- (NSArray<NSString *> *)paymentSchemes;
- (NSArray<OPPToken *> *)cardTokens;
- (nullable OPPPaymentParams *)preparePaymentParamsWithPaymentBrand:(nonnull NSString *)paymentBrand token:(nullable OPPToken *)token;
@end

NS_ASSUME_NONNULL_END
