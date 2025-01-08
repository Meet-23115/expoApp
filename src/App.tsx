
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import "../global.css";
export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <View className=' h-full w-10  bg-slate-600'>
        hello
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor : "white"
  }
});
