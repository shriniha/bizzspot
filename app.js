import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabTwoScreen from './twosh';
import TabThreeScreen from './threesh';
import STOCK from './home';
import TabFiveScreen from './fivesh';
import TabOneScreen from './onesh';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          showlabel: false, // Set to false if you don't want labels
          tabBarHideOnKeyboard: false,
          tabBarInactiveTintColor: '#003a88',
          tabBarActiveTintColor: '#90b1db',
          tabBarStyle: {
            backgroundColor: '#dfe9f5',
            height: 80,
            borderRadius: 50,
            borderBottomWidth: 10,
            borderBlockEndColor: 'white',
            borderCurve: 30,
            marginLeft: 10,
            marginRight: 10,
            shadowColor: 'white',
          },
          tabBarItemStyle: {
            backgroundColor: '#dfe9f5',
            margin: 10,
            borderRadius: 60,
            height: 50,
          },
        }}
      >
        <Tab.Screen name="MAP" component={TabOneScreen}
        options={{
          tabBarLabel:'MAP',
          tabBarIcon:({color,size})=>(
          <Ionicons name="md-location-sharp" color={color} size={size}/>),
        }}
        />
        <Tab.Screen name="UNKNOWN" component={TabTwoScreen}
        options={{tabBarLabel:'QUERIES',
        tabBarIcon:({color,size})=>(
          <Ionicons name="alert-outline" color={color} size={size}/>),
        }}
        />
        <Tab.Screen name="ADD" component={TabFiveScreen}
        options={{tabBarLabel:'',
        tabBarIcon:({color,size})=>(
          <Ionicons name="add-circle-sharp" color={color} size={40} />),
        }}
        />
        <Tab.Screen name="PROFILE" component={TabThreeScreen}
        options={{tabBarLabel:'PROFILE',
        tabBarIcon:({color,size})=>(
          <Ionicons name="people" color={color} size={size}/>),
        }}
        />
        
        <Tab.Screen name="STOCK" component={STOCK}
        options={{tabBarLabel:'STOCK',
        tabBarIcon:({color,size})=>(
          <Ionicons name="analytics-sharp" color={color} size={size}/>),
        }}
        />
      </Tab.Navigator>
    );
  }
  