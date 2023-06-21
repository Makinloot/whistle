import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Home from './src/screens/home/Home';
import Navbar from './src/components/navbar/Navbar';
import Search from './src/screens/search/Search';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* <Search /> */}
      <Home />
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    position: 'relative'
  },
});
