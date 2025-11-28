//  © Copyright ACI Worldwide, Inc. 2018, 2025

@import Foundation;

NS_ASSUME_NONNULL_BEGIN

/// Enumeration of possible statuses of YooKassa payment.
typedef NS_ENUM(NSInteger, OPPYooKassaStatus) {
    /// Payment is successfully completed.
    OPPYooKassaStatusSucceeded,
    
    /// Payment is created, waiting for user confirmation.
    OPPYooKassaStatusPending,
    
    /// Payment is made, funds are authorized and waiting for capture.
    OPPYooKassaStatusWaitingForCapture,
    
    /// Payment is canceled.
    OPPYooKassaStatusCanceled,
    
    /// Status is not defined.
    OPPYooKassaStatusUndefined
};

/**
 Class to represent YooKassa parameters needed for performing transaction.
 */
@interface OPPYooKassaInfo : NSObject

/// @name Initialization

/// :nodoc:
- (instancetype)init NS_UNAVAILABLE;

/**
 Creates YooKassa info object with the provided status, confirmation and callback urls.
 @param status Status of YooKassa payment.
 @param confirmationUrl The URL string to redirect the user to confirm payment.
 @param callbackUrl The URL string to notify backend about payment completion.
 @return an `OPPYooKassaInfo` object.
 */
+ (nullable instancetype)yooKassaInfoWithStatus:(OPPYooKassaStatus)status
                                confirmationUrl:(nullable NSString *)confirmationUrl
                                    callbackUrl:(nullable NSString *)callbackUrl;

/**
 Creates YooKassa info object with the provided status, confirmation and callback urls.
 @param status Status of YooKassa payment.
 @param confirmationUrl The URL string to redirect the user to confirm payment.
 @param callbackUrl The URL string to notify backend about payment completion.
 @return an `OPPYooKassaInfo` object.
 */
- (nullable instancetype)initWithStatus:(OPPYooKassaStatus)status
                        confirmationUrl:(nullable NSString *)confirmationUrl
                            callbackUrl:(nullable NSString *)callbackUrl NS_DESIGNATED_INITIALIZER;


/// @name Properties

/// Status of YooKassa payment.
@property (nonatomic, readonly) OPPYooKassaStatus status;

/// The URL string to redirect the user to confirm payment.
@property (nonatomic, copy, readonly, nullable) NSString *confirmationUrl;

/// The URL string to notify backend about payment completion.
@property (nonatomic, copy, readonly, nullable) NSString *callbackUrl;

/// :nodoc:
+ (OPPYooKassaStatus)statusFromString:(nonnull NSString *)statusString;

@end

NS_ASSUME_NONNULL_END
