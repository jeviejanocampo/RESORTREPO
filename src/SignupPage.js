import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { SignUpCSS } from './css/signup-page-css';

const SignUpPage = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const InsertUser = async () => {
    try {
      const response = await fetch('http://192.168.1.32:8000/api/customers/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          phone: phone,
          password: password,
          address: address,
        }),
      });
  
      const text = await response.text(); // Get raw response as text
      console.log('Raw response text:', text); // Debugging log
  
      try {
        const data = JSON.parse(text); // Try to parse JSON
        console.log('Parsed JSON:', data); // Debugging log
  
        if (response.ok) {
          alert('User successfully inserted!');
        } else {
          alert('Failed to insert user: ' + (data.message || 'Unknown error'));
        }
      } catch (jsonError) {
        console.error('JSON Parse Error:', jsonError);
        alert('Server returned invalid JSON. Raw response:\n\n' + text);
      }
  
    } catch (error) {
      console.error('Fetch Error:', error);
      alert('Network error: ' + error.message);
    }
  };
  
  

  return (
    <View style={SignUpCSS.container}>
        
      <View style={SignUpCSS.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={SignUpCSS.backText}>Back</Text>
        </TouchableOpacity>
      </View>


      <Text style={SignUpCSS.headerTitle}>Sign Up</Text>

      <ScrollView contentContainerStyle={SignUpCSS.formContainer}>
        <TextInput
          style={SignUpCSS.input}
          placeholder="Full Name"
          placeholderTextColor="black"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={SignUpCSS.input}
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={SignUpCSS.input}
          placeholder="Phone Number"
          placeholderTextColor="black"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <View style={SignUpCSS.passwordContainer}>
          <TextInput
            style={SignUpCSS.passwordInput}
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={SignUpCSS.toggleText}>
              {showPassword ? 'Hide' : 'View'}
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={[SignUpCSS.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Address (optional)"
          placeholderTextColor="black"
          value={address}
          onChangeText={setAddress}
          multiline={true}
          numberOfLines={4}
        />

        <TouchableOpacity style={SignUpCSS.submitButton} onPress={InsertUser}>
          <Text style={SignUpCSS.submitButtonText}>Submit</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
};

export default SignUpPage;
