import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';  
import Login from './Login';
import Checklist from "./Checklist";
import ChecklistsDetails from './ChecklistsDetails';
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator();

const Navegacao = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {

        await AsyncStorage.removeItem('token'); 

        const token = await AsyncStorage.getItem('token');
        setIsLoggedIn(!!token);  
      } catch (error) {
        console.error("Erro ao acessar AsyncStorage:", error);
        setIsLoggedIn(false);  
      } finally {
        setLoading(false);  
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
      <Stack.Navigator initialRouteName={isLoggedIn ? "Checklist" : "Login"}>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen name="Checklist" component={Checklist} />
        <Stack.Screen name="ChecklistsDetails" component={ChecklistsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navegacao;
