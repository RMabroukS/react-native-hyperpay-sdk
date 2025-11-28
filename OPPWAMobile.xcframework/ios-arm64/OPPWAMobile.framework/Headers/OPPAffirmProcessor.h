//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>
#import "OPPTransaction.h"
#import "OPPPaymentProvider.h"
/**
 Completion block for affirm payment processing.
 */
typedef void (^CompletionBlock)(OPPTransaction * _Nonnull, NSError * _Nullable);


NS_ASSUME_NONNULL_BEGIN
/**
 Class to process affirm transaction.
 */
@interface OPPAffirmProcessor : NSObject

/// :nodoc:
- (instancetype)init NS_UNAVAILABLE;

/**
 Creates an object representing an affirm processor.
 
 @param transaction Transaction object to process, and it should not be nil.
 @param mode Provider mode to set environment.
 @param error Error occured while initializing the processor.
 @return Returns an object representing an affirm processor.
 */
- (nullable instancetype)initWithTransaction:(nonnull OPPTransaction *)transaction
                                        mode:(OPPProviderMode)mode
                                       error:(NSError * _Nullable __autoreleasing * _Nullable)error;
/**
 Method to process affirm transaction
 
 @param presentingViewController Viewcontroller to present affirm transaction processing view.
 @param completionBlock Completion block to handle transaction or error.
 */
- (void)process:(nonnull UIViewController *)presentingViewController
           with:(nonnull CompletionBlock)completionBlock;

@end

NS_ASSUME_NONNULL_END
