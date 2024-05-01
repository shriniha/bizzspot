import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './edit'; 
import Profile from './profile';// Make sure the path is correct

const Stack = createStackNavigator();

const TabThreeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default TabThreeScreen;
