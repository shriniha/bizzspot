import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: '#003a88', padding: 10, borderRadius: 20, marginLeft: 20, marginTop: 30 }}
          >
            <ArrowLeftIcon size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' ,top: -25}}>
          <Image source={require('./signup.png')} style={{ width: 230, height: 230 }} />
        </View>
      </SafeAreaView>
      <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50, flex: 1, backgroundColor: 'white', padding: 20, margin: 10,top:-60 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: 'gray', marginLeft: 10 ,top:-60}}>Full Name</Text>
          <TextInput
            style={{ padding: 10, backgroundColor: 'lightgray', color: 'black', borderRadius: 20, marginBottom: 10 ,top: -50}}
            placeholder="Enter Name"
            value="jesica"
          />
          <Text style={{ color: 'gray', marginLeft: 10,top:-40 }}>Email Address</Text>
          <TextInput
            style={{ padding: 10, backgroundColor: 'lightgray', color: 'black', borderRadius: 20, marginBottom: 10 ,top:-30}}
            placeholder="Enter Email"
            value="jesica@gmail.com"
          />
          <Text style={{ color: 'gray', marginLeft: 10 ,top:-20}}>Password</Text>
          <TextInput
            style={{ padding: 10, backgroundColor: 'lightgray', color: 'black', borderRadius: 20, marginBottom: 7 ,top:-10}}
            secureTextEntry
            placeholder="Enter Password"
            value="test12345"
          />
          <TouchableOpacity onPress={() => navigation.navigate('APP')}
           style={{ padding: 10, backgroundColor: '#003a88', borderRadius: 20,top:-5, borderColor:'lightblue',borderWidth:3}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 15, color: 'gray', fontWeight: 'bold', textAlign: 'center', marginBottom: 50 ,top:-20}}>
          Or
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 30, marginBottom: 20 ,top:-70,left:-25}}>
          <TouchableOpacity style={{ padding: 30, backgroundColor: 'white', borderRadius: 60, marginRight: 20 }}>
            <Image source={require('./google.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 30, backgroundColor: 'white', borderRadius: 20, marginRight: 20 }}>
            <Image source={require('./apple.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 30, backgroundColor: 'white', borderRadius: 20 }}>
            <Image source={require('./facebook.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <View  style={{ justifyContent: 'center',top:50,marginLeft:-290,top:35}}>
            <Text> Google                   Apple                 Facebook </Text>
          </View>      
          <View style={{ flexDirection: 'row', justifyContent: 'center',top:110 ,marginLeft:-250}}>
          <Text style={{ color: 'gray', fontWeight: 'bold',fontSize:15 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SIGNUP')}>
            <Text style={{ fontWeight: 'bold', color: '#003a88' }}> Sign Up</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
  );
}
