import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomePageCSS } from '../css/home-page-css';

const Home = () => {
  return (
    <View style={HomePageCSS.container}>

      <View style={HomePageCSS.body}>
        <Text style={HomePageCSS.homeText}>Welcome to the Official Home Page!</Text>
      </View>

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
          <Text style={HomePageCSS.navButtonText}>Rooms</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={HomePageCSS.navButton}
          onPress={() => {}}
        >
          <Text style={HomePageCSS.navButtonText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
