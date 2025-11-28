//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>

/**
 Class to encapsulate shopper’s virtual account details that have been tokenized.
 */

NS_ASSUME_NONNULL_BEGIN
@interface OPPVirtualAccount : NSObject

/// @name Properties

/** The name of virtual account holder. */
@property (nonatomic, copy, nullable) NSString *holder;

/** The identifier of the virtual account. */
@property (nonatomic, copy) NSString *accountId;

/// @name Initialization

/// :nodoc:
- (instancetype)init NS_UNAVAILABLE;

/**
 Creates an `OPPVirtualAccount` object from the JSON.
 @param JSON A dictionary with parameters received from the Server.
 @return Returns an `OPPVirtualAccount` object, or `nil` if JSON contains invalid values.
 */
+ (nullable instancetype)virtualAccountFromJSON:(NSDictionary *)JSON;

/**
 Creates an `OPPVirtualAccount` object with the provided values.
 @param holder The name of virtual account holder.
 @param accountId The identifier of the virtual account.
 @return Returns an `OPPVirtualAccount` object, or `nil` if parameters are empty.
 */
+ (nullable instancetype)virtualAccountWithHolder:(nullable NSString *)holder
                                        accountId:(NSString *)accountId;

/**
 Creates an `OPPVirtualAccount` object with the provided values.
 @param holder The name of virtual account holder.
 @param accountId The identifier of the virtual account.
 @return Returns an `OPPVirtualAccount` object, or `nil` if parameters are empty.
 */
- (nullable instancetype)initWithHolder:(nullable NSString *)holder
                              accountId:(NSString *)accountId NS_DESIGNATED_INITIALIZER;

@end
NS_ASSUME_NONNULL_END
