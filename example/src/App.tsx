import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { applePay } from 'react-native-hyperpay';

export default function App() {
  const [result, setResult] = React.useState<string>("");
  React.useEffect(() => {
    applePay("CheckoutId").then((res: any) => {
      setResult(res)
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
