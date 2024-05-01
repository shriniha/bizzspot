import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import TabFiveScreen from './five';
import TabThreeScreen from './three';
import TabTwoScreen from './two';
import TabFourScreen from './four';
import Home from '.';

export default function STOCK() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false, // Set to false if you don't want labels
        tabBarHideOnKeyboard: false,
        tabBarInactiveTintColor: '#003a88',
        tabBarActiveTintColor: '#90b1db',
        tabBarStyle: {
          backgroundColor: 'transparent', // Set background color to transparent
          height: 80,
          marginLeft: 10,
          marginRight: 10,
          shadowColor: 'white',
        },
        tabBarItemStyle: {
          backgroundColor: 'transparent', // Set background color to transparent
          margin: 0, // Set margin to 0
          borderRadius: 0, // Set border radius to 0
          height: 50,
        },
      }}
    >
      <Tab.Screen 
        name="index" 
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="#003a88" />,
        }}
      />
      <Tab.Screen
        name="two" 
        component={TabTwoScreen}
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={24} color="#003a88" />,
        }}
      />
      <Tab.Screen
        name="three" 
        component={TabThreeScreen}
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line" size={24} color="#003a88" />,
        }}
      />
      <Tab.Screen
        name="four" 
        component={TabFourScreen}
        options={{
          title: 'Rankings',
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={24} color="#003a88" />,
        }}
      />
      <Tab.Screen
        name="five" 
        component={TabFiveScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color="#003a88" />,
        }}
      />
    </Tab.Navigator>
  );
}
