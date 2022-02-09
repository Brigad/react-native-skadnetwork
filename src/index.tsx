import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-skadnetwork' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const RNSKAdNetwork = NativeModules.RNSKAdNetwork
  ? NativeModules.RNSKAdNetwork
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function updatePostbackConversionValue(
  conversionValue: number
): Promise<boolean> {
  return RNSKAdNetwork.updatePostbackConversionValue(conversionValue);
}
