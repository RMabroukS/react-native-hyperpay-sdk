//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:
@interface NSMutableArray (OPPPaymentTokens)
- (void)ptt_sortTokensWithPaymentBrands:(NSArray<NSString *> *)paymentBrands;
@end

NS_ASSUME_NONNULL_END
