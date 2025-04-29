import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomePageCSS } from '../css/home-page-css';

const Home = () => {
  return (
    <View style={HomePageCSS.container}>
      {/* Body */}
      <View style={HomePageCSS.body}>
        <Text style={HomePageCSS.homeText}>Welcome to the Official Home Page!</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={HomePageCSS.bottomNav}>
        <TouchableOpacity
          style={HomePageCSS.navButton}
          onPress={() => {}}
        >
          <Text style={HomePageCSS.navButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={HomePageCSS.navButton}
          onPress={() => {}}
        >
          <Text style={HomePageCSS.navButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
