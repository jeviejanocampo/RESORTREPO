import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/LandingPage';
import LoginPage from './src/LoginPage';
import SignUpPage from './src/SignupPage';
import Home from './src/main/Home';
import RoomPage from './src/main/pages/RoomPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} /> 
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="RoomPage" component={RoomPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
