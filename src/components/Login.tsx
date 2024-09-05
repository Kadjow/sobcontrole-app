import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomStyles from '../Styles/CustomStyles';

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('tester@tester.com');
  const [password, setPassword] = useState('sob123');
  const [showPassword, setShowPassword] = useState(false); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://driver-api-production.up.railway.app/auth', {
        email,
        password,
      });

      const { access_token, refresh_token } = response.data;

      await AsyncStorage.setItem('token', access_token);
      await AsyncStorage.setItem('refreshToken', refresh_token);

      const storedToken = await AsyncStorage.getItem('token');
      console.log('Token armazenado:', storedToken);

      navigation.navigate('Checklist', { token: storedToken });
    } catch (error: any) {
      console.error("Erro no login:", error.response ? error.response.data : error.message);
      Alert.alert('Erro', 'Falha no login. Verifique seu email e senha.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={CustomStyles.loginContainer}>
          

          <Image
            style={CustomStyles.sobLogo}
            source={require('../img/sobLogo.jpg')} 
          />

          <Text style={CustomStyles.title}>Seja bem-vindo!</Text>

          <TextInput
            style={CustomStyles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={CustomStyles.passwordContainer}>
            <TextInput
              style={{ flex: 1 }}  
              value={password}
              onChangeText={setPassword}
              placeholder="Senha"
              secureTextEntry={!showPassword} 
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {/* Ícone de olho */}
              <Text>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={CustomStyles.button} onPress={handleLogin}>
            <Text style={CustomStyles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
