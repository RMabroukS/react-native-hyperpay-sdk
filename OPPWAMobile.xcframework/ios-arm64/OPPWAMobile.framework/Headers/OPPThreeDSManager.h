//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

@import Foundation;
@import ipworks3ds_sdk;
@class OPPTransaction;
@class OPPPaymentProvider;

/// :nodoc:
NS_ASSUME_NONNULL_BEGIN

typedef void (^ProviderResultCallback) (OPPTransaction * _Nullable transaction,
                                        NSError * _Nullable error);

/// :nodoc:
@interface OPPThreeDSManager : NSObject

- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithPaymentProvider:(OPPPaymentProvider *)paymentProvider;

- (void)proceedWithAppFlowTransaction:(OPPTransaction *)transaction
                                  completion:(ProviderResultCallback)completion;

- (void)securityWarningsWithCompletion:(void (^)(NSArray<Warning *> * _Nullable warnings,
                                                 NSError * _Nullable error))completion;

- (void)proceedWithWebFlowTransaction:(OPPTransaction *)oppTransaction
                    completionHandler:(void (^)(OPPTransaction *transaction,
                                                NSError * _Nullable error))completionHandler;

- (void)addThreeDSflowParam:(OPPPaymentParams *)params;

- (void)addWebThreeDSParamsToPaymentParams:(nonnull OPPPaymentParams *)params
                           paymentProvider:(nonnull OPPPaymentProvider *)provider
                                completion:(void (^)(void))completion;
@end

NS_ASSUME_NONNULL_END
