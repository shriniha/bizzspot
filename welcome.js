import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C2354' }}>
      <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 50,bottom:-40 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
          Let's Get Started
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' ,top:10}}>
          <Image source={require("./app_logo.png")} style={{ width: 400, height: 400}} />
        </View>
        <View style={{ marginVertical: 50 }}>
          <TouchableOpacity onPress={()=> navigation.navigate('SIGNUP')}
            style={{ paddingVertical: 15, backgroundColor: '#1FEDF4', marginHorizontal: 100, borderRadius: 50 }}
          >
            <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 60 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('LOGIN')}>
              <Text style={{ color: '#FFD700', fontWeight: 'bold' }}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}
