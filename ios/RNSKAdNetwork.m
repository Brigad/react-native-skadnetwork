#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNSKAdNetwork, NSObject)

RCT_EXTERN_METHOD(updatePostbackConversionValue:(int)conversionValue
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


@end
