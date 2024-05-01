// ProductList.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Product from './Product';
import ProductDetail from './ProductDetail';
import BuyScreen from './BuyScreen';
import VerificationScreen from './VerificationScreen';
import ConfirmationScreen from './ConfirmationScreen';
import OrderDetailsScreen from './OrderDetailsScreen';
import ProductItem from './ProductItem';
import SellScreen from './SellScreen';
import SoldScreen from './SoldScreen';
import SoldDetails from './SoldDetails';
import Header from './five';


const Stack = createStackNavigator();
const ProductListes = () => {
  const navigation = useNavigation();
  const products = [
    {
      title: 'Discover networks',
      subtitle: 'NETWORK & BROADCAST',
      cost: '160',
      valueChangeByHour: +10,
      logo: require('./discover.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'Saravana Hotels',
      subtitle: 'FOOD',
      cost: '50',
      valueChangeByHour: -5,
      logo: require('./hotel.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'Mode fashion',
      subtitle: 'CLOTHINGS',
      cost: '70',
      valueChangeByHour: +10,
      logo: require('./cloth.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'TSS Steels',
      subtitle: 'HARDWORKS',
      cost: '210',
      valueChangeByHour: +8,
      logo: require('./seesteel.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'Avnet Electrics',
      subtitle: 'ELECTRONICS',
      cost: '230',
      valueChangeByHour: -8,
      logo: require('./electronics.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'Suresh Supermarket',
      subtitle: 'GROCERY',
      cost: '190',
      valueChangeByHour: +8,
      logo: require('./sm.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'Behance Exports',
      subtitle: 'EXPORTS',
      cost: '110',
      valueChangeByHour: -2,
      logo: require('./behance.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'Ra-One Gamers',
      subtitle: 'SPORTS AND GAMES',
      cost: '90',
      valueChangeByHour: -2,
      logo: require('./robot.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'Costco Furnitures',
      subtitle: 'HARDWORKS',
      cost: '170',
      valueChangeByHour: +9,
      logo: require('./costco.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
    {
      title: 'Kyber Cafe',
      subtitle: 'CAFE',
      cost: '90',
      valueChangeByHour: -2,
      logo: require('./houzz.png'),
      randomValues: {
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      },
    },
  ];

  return (
    <ScrollView>
      <View style={styles.topContent}>
        <Image source={require('./welcome.png')} style={styles.topImage} />
        <Text style={styles.topText}>HERE'S YOUR MARKET</Text>
      </View>
      {products.map((product, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('ProductDetail', {
              title: product.title,
              subtitle: product.subtitle,
              cost: product.cost,
              valueChangeByHour: product.valueChangeByHour,
              logo: product.logo,
              randomValues: product.randomValues,
            })
          }
        >
          <Product
            title={product.title}
            subtitle={product.subtitle}
            cost={product.cost}
            valueChangeByHour={product.valueChangeByHour}
            logo={product.logo}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Adjust as needed
  },
  topImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  topText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

const App = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="ProductListes" component={ProductListes} />
      <Stack.Screen name="ProductItem" component={ProductItem} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="BuyScreen" component={BuyScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="SellScreen" component={SellScreen} />
      <Stack.Screen name="SoldScreen" component={SoldScreen} />
      <Stack.Screen name="SoldDetails" component={SoldDetails} />
     
    </Stack.Navigator>
  );
};

export default App;
