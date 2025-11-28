//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>
#import "OPPTransaction.h"

/**
 Completion block for Cash App Pay payment processing.
 */
typedef void (^CompletionBlock)(OPPTransaction * _Nonnull, NSError * _Nullable);

NS_ASSUME_NONNULL_BEGIN

/**
 Class to process Cash App Pay Payments transaction.
 */
@interface OPPCashAppPayProcessor : NSObject

/**
 Creates an object representing an Cash App Pay processor.
 
 @param transaction transaction to process, and it should not be nil.
 @param error The error that occurred while processing transaction. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Cash App Pay processor.
 */
- (nullable instancetype)initWithTransaction:(nonnull OPPTransaction *)transaction
                                       error:(NSError * _Nullable *)error;

/**
 Method to process Cash App Pay transaction.
 */
- (void)process:(nonnull CompletionBlock)completionBlock;

@end

NS_ASSUME_NONNULL_END
