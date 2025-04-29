import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { LoginCSS } from './css/login-page-css';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={LoginCSS.container}>
      {/* Header */}
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

        <TouchableOpacity style={LoginCSS.signupContainer} onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={LoginCSS.signupText}>No account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
