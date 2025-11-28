//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPTransaction.h"

/// :nodoc:
NS_ASSUME_NONNULL_BEGIN

@interface OPPThreeDSViewController : UIViewController

@property (nonatomic, assign) BOOL isPresent;

- (nullable instancetype)initWithTransaction:(OPPTransaction *)transaction
                             paymentProvider:(OPPPaymentProvider *)provider
                           completionHandler:(void (^)(OPPTransaction *transaction,
                                                       NSError * _Nullable error))completionHandler;

@end

NS_ASSUME_NONNULL_END
