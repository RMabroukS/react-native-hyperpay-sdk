//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>
@class OPPPaymentBrandsConfig;
@class OPPSecurityPolicy;
@class OPPToken;

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:
@interface NSMutableArray (OPPPaymentBrands)
- (void)ptb_mergePaymentBrandsUsingPaymentBrandConfig:(OPPPaymentBrandsConfig *)config;
- (void)ptb_mergePaymentBrandsUsingDropInPaymentBrand:(nullable NSString *)dropInPaymentBrand;
- (void)ptb_filterPaymentBrandsUsingSecurityPolices:(NSArray<OPPSecurityPolicy *> *)policies deviceAuthEnabled:(BOOL)deviceAuthEnabled;
- (void)ptb_validatePaymentBrandsWithError:(NSError **)error;
- (void)ptb_filterPaymentBrands:(NSArray<NSString *> *)paymentBrands error:(NSError **)error;
@end
NS_ASSUME_NONNULL_END
