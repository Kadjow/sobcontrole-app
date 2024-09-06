import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';  
import Login from './Login';
import Checklist from './Checklist';
import ChecklistsDetails from './ChecklistsDetails';
import { ActivityIndicator, Alert, View, Text } from "react-native";
import axios from 'axios';

const Stack = createStackNavigator();

const Navegacao = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const response = await axios.get('https://driver-api-production.up.railway.app/auth/check-token', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.status === 200) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
            await AsyncStorage.removeItem('token');
          }
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Erro ao verificar token:", error);
        Alert.alert('Erro', 'Falha ao verificar o token. Redirecionando para o login.');
        setIsLoggedIn(false);
        await AsyncStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };
    
    checkLoginStatus();
  }, []);
    
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Checklist" : "Login"}>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Checklist" 
          component={Checklist}  
        />
        <Stack.Screen name="ChecklistsDetails" component={ChecklistsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navegacao;
