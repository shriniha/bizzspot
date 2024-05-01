import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ navigation, route }) => {
  const { updatedBalance } = route.params || { updatedBalance: 0 }; // Receive the updated balance

  const products = [
    {
      id: 1,
      imageSource: require('./increase.png'), // Assuming images are in the same folder as this file
      title: 'Handsavings',
      cost: '7519.99',
    },
    {
      id: 2,
      imageSource: require('./port.png'),
      title: 'Withdrawal',
      cost: '1256.89',
    },
    {
      id: 3,
      imageSource: require('./port.png'),
      title: 'Loan sanctioned',
      cost: '1920.56',
    },
    {
      id: 4,
      imageSource: require('./port.png'),
      title: 'Transfered',
      cost: '1089.04',
    },
    
  ];

  return (
    <ScrollView>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          imageSource={product.imageSource}
          title={product.title}
          cost={product.cost}
          updatedBalance={updatedBalance} // Pass down the updated balance
        />
      ))}
      <View style={{ padding: 20 }}>
        <Image
          source={require('./port.png')} // Replace with the path to your additional image
          style={{ width: 250, height: 150, marginBottom: 10, marginHorizontal:60 }}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold' , marginHorizontal: 100, textAlign:'center',top:-10,}}>YOUR PORTFOLIO ASSET</Text>
        <Text style={{fontSize: 25, marginHorizontal:140, textAlign:'center',top:-6}}></Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  centerImage: {
    width: 100, // Set your desired width
    height: 100, // Set your desired height
    resizeMode: 'cover', // or 'contain' based on your requirements
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  updatedBalanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

});

export default ProductList;
