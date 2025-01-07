
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import "../global.css";
export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <Text className="text-yellow-400">Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor : "white"
  }
});
