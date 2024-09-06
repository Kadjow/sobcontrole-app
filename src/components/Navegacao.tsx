import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';  
import Login from './Login';
import Checklist from './Checklist';
import ChecklistBustaeFiltro from "../extras/ChecklistBuscaeFiltro";
import ChecklistsDetails from './ChecklistsDetails';
import { ActivityIndicator } from "react-native";

const Stack = createStackNavigator();

const Navegacao = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setIsLoggedIn(!!token); // Se o token existir, o usuário está logado
      } catch (error) {
        console.error("Erro ao acessar AsyncStorage:", error);
        setIsLoggedIn(false);  // Se houver erro, trata como deslogado
      } finally {
        setLoading(false);  // Finaliza o loading
      }
    };
  
    checkLoginStatus();
  }, []);
  

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "ChecklistMelhoria" : "Login"}>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Checklist" 
          component={Checklist}  
        />
        <Stack.Screen 
          name="ChecklistMelhoria"  
          component={ChecklistBustaeFiltro}  
        />
        <Stack.Screen name="ChecklistsDetails" component={ChecklistsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navegacao;
