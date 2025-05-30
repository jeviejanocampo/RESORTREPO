import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginCSS } from './css/login-page-css';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('rememberEmail').then((savedEmail) => {
      if (savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    });
  }, []);

  const toggleRememberMe = async () => {
    const value = !rememberMe;
    setRememberMe(value);
    if (value) {
      await AsyncStorage.setItem('rememberEmail', email);
    } else {
      await AsyncStorage.removeItem('rememberEmail');
    }
  };

  const LoginCustomer = async () => {
    try {
      const response = await fetch('http://192.168.1.32:8000/api/login/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const text = await response.text();
      const data = JSON.parse(text);

      if (response.ok) {
        alert('Login successful!');
        navigation.navigate('Home');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <View style={LoginCSS.container}>
      <View style={LoginCSS.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={LoginCSS.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={LoginCSS.formContainer}>
        <Text style={LoginCSS.headerTitle}>Janilyn Resort</Text>

        <TextInput
          style={LoginCSS.input}
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={LoginCSS.passwordContainer}>
          <TextInput
            style={LoginCSS.passwordInput}
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={LoginCSS.toggleText}>
              {showPassword ? 'Hide' : 'View'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={LoginCSS.rememberContainer}>
          <Pressable onPress={toggleRememberMe} style={LoginCSS.checkbox}>
            {rememberMe && <View style={LoginCSS.checkboxChecked} />}
          </Pressable>
          <Text style={LoginCSS.rememberText}>Remember Me</Text>
        </View>

        <TouchableOpacity style={LoginCSS.loginButton} onPress={LoginCustomer}>
          <Text style={LoginCSS.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={LoginCSS.signupContainer} onPress={() => navigation.navigate('SignUpPage')}>
          <Text style={LoginCSS.signupText}>No account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
