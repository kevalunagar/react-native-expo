import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const from = process.env.EXPO_PUBLIC_FROM;
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>From {from}</Text>
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
