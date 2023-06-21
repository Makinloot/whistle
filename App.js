import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>hi</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
