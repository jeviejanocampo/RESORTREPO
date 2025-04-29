import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LandingCSS } from './css/landing-page-css';

const LandingPage = ({ navigation }) => {
  return (
    <View style={LandingCSS.container}>
      {/* Body */}
      <View style={LandingCSS.body}>
        <Text style={LandingCSS.homeText}>Welcome to the Home Page!</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={LandingCSS.bottomNav}>
        <TouchableOpacity
          style={LandingCSS.navButton}
          onPress={() => {}} // Home button does nothing because you're already in Home
        >
          <Text style={LandingCSS.navButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={LandingCSS.navButton}
          onPress={() => navigation.navigate('LoginPage')} // 👈 Navigate to LoginPage
        >
          <Text style={LandingCSS.navButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;
