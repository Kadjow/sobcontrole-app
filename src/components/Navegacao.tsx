import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';  
import Login from './Login';
import Checklist from './Checklist';
import ChecklistBustaeFiltro from "../extras/ChecklistBuscaeFiltro";
import ChecklistsDetails from './ChecklistsDetails';
import { ActivityIndicator, Text, View } from "react-native";

const Stack = createStackNavigator();

const Navegacao = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);  // Atualizando o estado para null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);  // Se o token existir, usuário está autenticado
        } else {
          setIsLoggedIn(false); // Se não houver token, vai para a tela de login
        }
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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "ChecklistMelhoria" : "Login"}>
        {isLoggedIn ? (
          <>
            <Stack.Screen 
              name="ChecklistMelhoria"  
              component={ChecklistBustaeFiltro}  
            />
            <Stack.Screen name="ChecklistsDetails" component={ChecklistsDetails} />
          </>
        ) : (
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }}  
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navegacao;
