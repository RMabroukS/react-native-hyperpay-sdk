//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:
@class OPPKlarnaPaymentViewWrapper;
/// :nodoc:
@protocol OPPKlarnaPaymentViewWrapperDelegate <NSObject>
- (void)klarnaAuthorizedWithPaymentViewWrapper:(OPPKlarnaPaymentViewWrapper * _Nonnull)paymentView
                                      approved:(BOOL)approved
                                     authToken:(NSString * _Nullable)authToken
                              finalizeRequired:(BOOL)finalizeRequired;
- (void)klarnaFailedInPaymentViewWrapper:(OPPKlarnaPaymentViewWrapper * _Nonnull)paymentView
                               withError:(NSError * _Nonnull)error;
- (void)klarnaLoadedWithPaymentViewWrapper:(OPPKlarnaPaymentViewWrapper * _Nonnull)paymentView;
@end

/// :nodoc:
@interface OPPKlarnaPaymentViewWrapper : NSObject

- (nullable UIView *)initializeKlarnaView:(nonnull NSString *)category
                              andDelegate:(nonnull id<OPPKlarnaPaymentViewWrapperDelegate>)delegate;
- (void)configureKlarna:(nonnull UIView *)view
                  token:(nonnull NSString *)token
                    url:(nonnull NSURL *)url;
- (void)authorizeKlarnaPayment:(nullable NSString *)jsonData;

@end

NS_ASSUME_NONNULL_END
