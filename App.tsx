import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';  
import Navegacao from './src/components/Navegacao';  
import 'react-native-gesture-handler';  

export default function App() {
  return (
    <SafeAreaView style={styles.container}>  
      <Navegacao />
      <StatusBar style="dark" /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
