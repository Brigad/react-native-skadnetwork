/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { View, Text } from 'react-native';
import { updatePostbackConversionValue } from 'react-native-skadnetwork';

export default function App() {
  const [status, setStatus] = React.useState<null | boolean>(null);
  React.useEffect(() => {
    updatePostbackConversionValue(0)
      .then(() => setStatus(true))
      .catch(() => setStatus(false));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
          status === null ? 'white' : status === true ? 'green' : 'red',
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
          }}
        >{`SKAdNetwork: ${status}`}</Text>
      </View>
    </View>
  );
}
