@objc(RNSKAdNetwork)
class RNSKAdNetwork: NSObject {
    @objc(updatePostbackConversionValue:withResolver:withRejecter:)
    func updatePostbackConversionValue(conversionValue: Int, resolve: @escaping RCTPromiseResolveBlock,reject: @escaping RCTPromiseRejectBlock) -> Void {
        if (conversionValue < 0 || conversionValue > 63) {
            reject("", "Conversion value must be >=0 && <64, got \(conversionValue)", nil)
            return;
        }
        // if #available(iOS 15.4, *) {
        //      SKAdNetwork.updatePostbackConversionValue(conversionValue)
        //      Use error to resolve true or false
        // } else
        if #available(iOS 14.0, *) {
            if (conversionValue == 0) {
                SKAdNetwork.registerAppForAdNetworkAttribution()
                resolve(true)
                return;
            } else {
                SKAdNetwork.updateConversionValue(conversionValue)
                resolve(true)
                return;
            }
        }
        else if #available(iOS 11.3, *) {
            SKAdNetwork.registerAppForAdNetworkAttribution()
            resolve(true)
            return;
        } else {
            reject("", "Unsupported on this iOS version", nil)
            return;
        }
    }
}
