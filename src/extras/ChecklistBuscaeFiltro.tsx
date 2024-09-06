import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomStyles from '../Styles/CustomStyles';

interface Pergunta {
  id: string;
  question: string;
  has_observation: boolean;
  right_answer: string;
}

interface Checklist {
  id: string;
  name: string;
  questions: Pergunta[];
}

const ChecklistBustaeFiltro = ({ navigation }: any) => {
  const [checklists, setChecklists] = useState<Checklist[]>([]);  
  const [checklistsFiltrados, setChecklistsFiltrados] = useState<Checklist[]>([]);  
  const [busca, setBusca] = useState<string>('');  
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarChecklists = async () => {
      try {
        const tokenArmazenado = await AsyncStorage.getItem('token');
        const resposta = await axios.get('https://driver-api-production.up.railway.app/protected/checklist/all', {
          headers: {
            Authorization: `Bearer ${tokenArmazenado}`,
          },
        });
        setChecklists(resposta.data || []);  
        setChecklistsFiltrados(resposta.data || []);  
      } catch (error) {
        console.error('Erro ao buscar os checklists:', error);
      } finally {
        setCarregando(false);
      }
    };

    buscarChecklists();
  }, []);

  const handleBusca = (query: string) => {
    setBusca(query);
    const filtrados = checklists.filter((checklist) =>
      checklist.name.toLowerCase().includes(query.toLowerCase())
    );
    setChecklistsFiltrados(filtrados);
  };

  if (carregando) {
    return <Text>Carregando...</Text>;  
  }

  return (
    <View style={[CustomStyles.container, { flex: 1 }]}>
      <Text style={CustomStyles.title}>Checklists</Text>

      <TextInput
        style={styles.inputBusca}
        placeholder="Buscar checklist..."
        value={busca}
        onChangeText={handleBusca}
      />

      <FlatList
        data={checklistsFiltrados.length > 0 ? checklistsFiltrados : []}  
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.botaoChecklist}
            onPress={() => navigation.navigate('ChecklistsDetails', { checklist: item })}
          >
            <Text style={styles.textoChecklist}>{item.name}</Text>  
            <Text style={styles.questaoChecklist}>{item.questions?.length.toString()} ?</Text>  
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBusca: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  botaoChecklist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F07C00',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  textoChecklist: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  questaoChecklist: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChecklistBustaeFiltro;
