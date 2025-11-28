//  © Copyright ACI Worldwide, Inc. 2018, 2025

@import Foundation;

/// :nodoc:
@interface NSString (Security)

- (nonnull NSData *)data;
- (nullable NSData *)data64Encoded;

- (void)wipe;

@end
