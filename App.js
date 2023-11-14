import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect, useState } from 'react';

export default function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [response, request, promptAsync] = Google.useAuthRequest({
    expoClientId: '958575752165-co57r7irlhb3t8mqghkcnimtu77dar16.apps.googleusercontent.com',
    iosClientId: '958575752165-2bndjeppps22cdik2krai9ai4crjqg0a.apps.googleusercontent.com',
    androidClientId: '958575752165-nqn9hedat21qp359a46s6965h53st9n2.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  const getUserData = () => {};

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title={accessToken ? 'Get user data' : 'Login'}
        onPress={accessToken ? getUserData : () => promptAsync({ useProxy: false, showInRecents: true })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
