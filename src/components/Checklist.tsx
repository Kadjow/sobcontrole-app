import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomStyles from '../Styles/CustomStyles';

const Checklist = ({ route, navigation }: any) => {
  const { token: routeToken } = route.params || {};  
  const [checklists, setChecklists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(routeToken || null); 

  useEffect(() => {
    const fetchTokenAndChecklists = async () => {
      let storedToken = routeToken || (await AsyncStorage.getItem('token'));

      if (!storedToken) {
        Alert.alert('Erro', 'Token não encontrado. Faça o login novamente.');
        navigation.navigate('Login');
        return;
      }

      setToken(storedToken); 

      try {
        
        const response = await axios.get('https://driver-api-production.up.railway.app/protected/checklist/all', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setChecklists(response.data);
      } catch (error) {
        Alert.alert('Erro', 'Falha ao buscar os checklists.');
      } finally {
        setLoading(false);
      }
    };

    fetchTokenAndChecklists();
  }, [routeToken, navigation]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={CustomStyles.checklistContainer}>
      <FlatList
        data={checklists}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }: { item: any }) => (
          <TouchableOpacity
            style={CustomStyles.checklistItem}
            onPress={() => navigation.navigate('ChecklistsDetails', { checklist: item })}
          >
            <Text style={CustomStyles.checklistText}>{item.name} 📋</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Checklist;
