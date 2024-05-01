// App.js
import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import Header from './Header';

const products = [
  {
    id: 1,
    logo: require('./furniture.png'),
    text: 'CF FURNITURE',
    netWorth: '1050',
  },
  {
    id: 2,
    logo: require('./interiors.png'),
    text: 'DECORA INTERIORS',
    netWorth: '990',
  },
  {
    id: 2,
    logo: require('./GS.png'),
    text: 'KGS BAKERY',
    netWorth: '900',
  },
  {
    id: 2,
    logo: require('./ANU.png'),
    text: 'ANU GARMENTS',
    netWorth: '890',
  },
  {
    id: 2,
    logo: require('./FISH.png'),
    text: 'BLAMOUR FISHERIES',
    netWorth: '890',
  },
  {
    id: 2,
    logo: require('./TAMIL.png'),
    text: 'TAMIL OPTICS',
    netWorth: '860',
  },
  {
    id: 2,
    logo: require('./INI.png'),
    text: 'INI FOOTWARES',
    netWorth: '800',
  },
  {
    id: 2,
    logo: require('./VJ.png'),
    text: 'VJ PHOTOGRAPHY',
    netWorth: '700',
  },
  {
    id: 2,
    logo: require('./SHIV.png'),
    text: 'SHIV SALOON',
    netWorth: '600',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.centeredContent}>
          <Image source={require('./ranking.png')} style={styles.centeredLogo} />
          <Text style={styles.centeredText}>TOP CHARTS</Text>
        </View>
      </View>

      {/* Products List */}
      <ScrollView style={styles.productList}>
        {products.map((product) => (
          <View key={product.id}>
            <Header
              logo={product.logo}
              text={product.text}
              netWorth={product.netWorth}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  
  },
  centeredContent: {
    alignItems: 'center',

  
  },
  centeredLogo: {
    width: 500,
    height: 100,
    resizeMode: 'contain',
    top: 50,
  },
  centeredText: {
    fontSize: 20,
    marginTop: 10,
    top:80,
    fontWeight:'800',
  },
  productList: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    top: 70, 
  },
});

export default App;
