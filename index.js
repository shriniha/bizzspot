import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = () => {
  return (
   
    <View style={{ flex: 1, backgroundColor: '#f2f1f1', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 10}}>WELCOME</Text>
      <Text style={{ fontSize: 20, fontWeight: 'normal', marginBottom: 1, textAlign:'center'}}>TREND WITH TRADE</Text>
      <Image
        source={require('./increase.png')}
        style={{ width: 350, height: 350, resizeMode: 'contain', marginBottom: 5 , top: 100}}
      />
    </View>
  
  );
};

export default Home;