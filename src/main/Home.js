import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomePageCSS } from '../css/home-page-css';

const Home = () => {
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('rememberMe').then((value) => {
      if (value === 'true') {
        setRememberMe(true);
      }
    });
  }, []);

  const toggleRememberMe = async () => {
    const newValue = !rememberMe;
    setRememberMe(newValue);
    await AsyncStorage.setItem('rememberMe', newValue.toString());
  };

  return (
    <View style={HomePageCSS.container}>
      <View style={HomePageCSS.body}>
        <Text style={HomePageCSS.homeText}>Welcome to the Official Home Page!</Text>

        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={HomePageCSS.input}
        />

        <View style={HomePageCSS.rememberContainer}>
          <Pressable onPress={toggleRememberMe} style={HomePageCSS.checkbox}>
            {rememberMe && <View style={HomePageCSS.checkboxChecked} />}
          </Pressable>
          <Text style={HomePageCSS.rememberText}>Remember Me</Text>
        </View>
      </View>

      <View style={HomePageCSS.bottomNav}>
        <TouchableOpacity style={HomePageCSS.navButton} onPress={() => {}}>
          <Text style={HomePageCSS.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomePageCSS.navButton} onPress={() => {}}>
          <Text style={HomePageCSS.navButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
