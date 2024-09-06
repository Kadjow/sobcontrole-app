import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
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

const Checklist = ({ navigation }: any) => {
  const [checklists, setChecklists] = useState<Checklist[]>([]);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChecklists = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          const response = await axios.get('https://driver-api-production.up.railway.app/protected/checklist/all', {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          if (response.data) {
            setChecklists(response.data);  
          }
        }
      } catch (error) {
        console.error('Erro ao buscar os checklists:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChecklists();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={CustomStyles.container}>
      <FlatList
        data={checklists}
        keyExtractor={(item) => item.id}  
        renderItem={({ item }) => (
          <TouchableOpacity
            style={CustomStyles.checklistItem}
            onPress={() => navigation.navigate('ChecklistsDetails', { checklist: item })}
          >
            <Text style={CustomStyles.checklistText}>{item.name} 📋</Text>  
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={CustomStyles.emptyText}>Nenhum checklist encontrado.</Text>}  
      />
    </View>
  );
};

export default Checklist;
