import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';  
import Navegacao from './src/components/Navegacao';  // Certifique-se de que este caminho está correto
import 'react-native-gesture-handler';  // Necessário para o Gesture Handler funcionar corretamente

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
