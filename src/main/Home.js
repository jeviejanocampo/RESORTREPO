import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomePageCSS } from '../css/home-page-css';
import RoomPage from './pages/RoomPage';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    if (activeTab === 'home') {
      return (
        <View style={HomePageCSS.body}>
          <Text style={HomePageCSS.homeText}>Welcome to the Official Home Page!</Text>
        </View>
      );
    } else if (activeTab === 'RoomPage') {
      return <RoomPage />;
    } else if (activeTab === 'account') {
      return (
        <View style={HomePageCSS.body}>
          <Text style={HomePageCSS.homeText}>Account Screen</Text>
        </View>
      );
    }
  };

  return (
    <View style={HomePageCSS.container}>
      {renderContent()}

      <View style={HomePageCSS.bottomNav}>
        <TouchableOpacity style={HomePageCSS.navButton} onPress={() => setActiveTab('home')}>
          <Text style={HomePageCSS.navButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={HomePageCSS.navButton} onPress={() => setActiveTab('RoomPage')}>
          <Text style={HomePageCSS.navButtonText}>Rooms</Text>
        </TouchableOpacity>

        <TouchableOpacity style={HomePageCSS.navButton} onPress={() => setActiveTab('account')}>
          <Text style={HomePageCSS.navButtonText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
