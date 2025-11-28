//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentProvider.h"

/// :nodoc:

NS_ASSUME_NONNULL_BEGIN
@interface OPPWAPaymentProvider : OPPPaymentProvider
/// Initialization with a provider mode
- (instancetype)initWithMode:(OPPProviderMode)mode;
@end
NS_ASSUME_NONNULL_END
