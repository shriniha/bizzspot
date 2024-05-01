import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 20, marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: '#003a88', padding: 10, borderRadius: 20 }}
          >
            <ArrowLeftIcon size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:60,top:-80 }}>
          <Image source={require('./login.png')} style={{ width: 350, height: 350 }} />
        </View>
      </SafeAreaView>
      <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50, flex: 1, backgroundColor: 'white', padding: 20, margin: 10,top:-40 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: 'gray', marginLeft: 10 }}>Email Address</Text>
          <TextInput
            style={{ padding: 20, backgroundColor: 'lightgray', color: 'black', borderRadius: 20, marginBottom: 10 }}
            placeholder="email"
            value="jesica@gmail.com"
          />
          <Text style={{ color: 'gray', marginLeft: 10 }}>Password</Text>
          <TextInput
            style={{ padding: 20, backgroundColor: 'lightgray', color: 'black', borderRadius: 20 }}
            secureTextEntry
            placeholder="password"
            value="test12345"
          />
          <TouchableOpacity style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: 'gray', marginBottom: 20 }}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('APP')}
          style={{ backgroundColor: '#003a88', borderRadius: 20, padding: 15,borderColor:'lightblue',borderWidth:3,top:-15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 20, color: 'gray', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
          Or
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 70, marginBottom: 10,top:-80 }}>
          <TouchableOpacity style={{ padding: 20, backgroundColor: 'white', borderRadius: 60, marginRight: 20, marginEnd: 30 }}>
            <Image source={require('./google.png')} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 20, backgroundColor: 'white', borderRadius: 20, marginRight: 20, marginEnd: 30 }}>
            <Image source={require('./apple.png')} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 20, backgroundColor: 'white', borderRadius: 20 }}>
            <Image source={require('./facebook.png')} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center',top:-70 }}>
          <Text style={{ color: 'gray', fontWeight: 'bold',fontSize:15 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SIGNUP')}>
            <Text style={{ fontWeight: 'bold', color: '#003a88' }}> Sign Up</Text>
          </TouchableOpacity>
          </View>
        <View  style={{ justifyContent: 'center',top:50,marginLeft:40,top:-130}}>
          <Text>   Google                    Apple               Facebook </Text>
        </View> 
      </View>
    </View>
  );
}
