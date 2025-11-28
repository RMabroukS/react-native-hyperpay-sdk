//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>
#import <UIkit/UIkit.h>
#import "OPPToken.h"

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:
@protocol OPPPaymentSchemeSelectionActionDelegate <NSObject>
- (void)viewControllerDidLoaded;
- (void)paymentSelectionControllerDidCancel;
- (void)paymentSelectionControllerDidSelectPaymentBrand:(nonnull NSString *)paymentBrand
                                      completionHandler:(nullable void (^)(BOOL success))completionHandler;
- (void)paymentSelectionControllerDidSelectToken:(nonnull OPPToken *)token
                               completionHandler:(nullable void (^)(BOOL success))completionHandler;
@end

/// :nodoc:
@protocol OPPPaymentSelectionDataSource <NSObject>
- (void)paymentSelectionControllerPaymentBrands:(nonnull NSArray<NSString *> *)paymentBrands;
- (void)paymentSelectionControllerCardTokens:(nonnull NSArray<OPPToken *> *)cardTokens;
@property (nonatomic, nullable) id<OPPPaymentSchemeSelectionActionDelegate> paymentSchemeActionDelegate;
@end

NS_ASSUME_NONNULL_END
