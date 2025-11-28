//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>
#import "OPPThreeDS2Info.h"
@class OPPToken;
@class OPPPaymentBrandsConfig;
@class OPPAffirmConfig;

/// An enumeration of possible mSDK UI types.
typedef NS_ENUM(NSInteger, OPPMsdkUiType) {
    /// Native mSDK UI type.
    OPPMsdkUiTypeNative,
    /// Browser-based mSDK UI type.
    OPPMsdkUiTypeHybrid
};

/** Class to encapsulate the parameters related to the checkout. */

NS_ASSUME_NONNULL_BEGIN
@interface OPPCheckoutInfo : NSObject

/// @name Properties

/** The amount of the transaction in the specified currency. */
@property (nonatomic) NSDecimalNumber *amount;

/** ISO 4217 currency code. */
@property (nonatomic, copy) NSString *currencyCode;

/** Tokens related to the checkout. */
@property (nonatomic, copy, nullable) NSArray<OPPToken *> *tokens;

/** Brand configuration parameters from the Server. */
@property (nonatomic, nullable) OPPPaymentBrandsConfig *paymentBrandsConfig;

/** The endpoint where the transaction will be sent to. */
@property (nonatomic, copy) NSString *endpoint;

/** Relative path to get status of transaction. */
@property (nonatomic, copy) NSString *resourcePath;

/** The merchant IDs related to Klarna Invoice and Klarna Installments. */
@property (nonatomic, copy, nullable) NSArray<NSString *> *klarnaMerchantIDs;

/** The country for ACI Instant Pay payment method. */
@property (nonatomic, copy, nullable) NSString *bankAccountCountry;

/** Shows if ReD Shield Device Id collecting is enabled or disabled. */
@property (nonatomic) BOOL collectRedShieldDeviceId;

/** mSDK UI type. */
@property (nonatomic, assign) OPPMsdkUiType msdkUiType;

/** The number in seconds for which the mSDK should wait before retrying another redirect. */
@property (nonatomic, readonly) NSTimeInterval asyncRedirectRetryDelay;

/** log levels that are fetched from checkout response*/
@property (nonatomic, copy) NSString *logLevel;

/** Affirm configuration */
@property (nonatomic, nullable) OPPAffirmConfig *affirmConfig;

/// @name Initialization

/**
 Creates checkout info object from the JSON that can be received from the Server by checkout ID.
 @param JSON A dictionary with parameters received from the Server.
 @param error An error if JSON is invalid.
 @return Returns an `OPPCheckoutInfo` object, or `nil` if JSON is invalid.
 */
+ (nullable instancetype)checkoutInfoFromJSON:(NSDictionary *)JSON error:(NSError * _Nullable *)error;

/// :nodoc:
- (BOOL)isRegistrationOnly;

@end
NS_ASSUME_NONNULL_END
