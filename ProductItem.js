import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const ProductItem = ({ imagePath, title, cost }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./spent.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cost}>{cost}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:19,
    margin: 40,
  },
  image: {
    width: 50, 
    height: 50, 
    marginRight: 10,
    borderRadius: 5,
    top:40, 
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    top:50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cost: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    top:-20,
  },
});

export default ProductItem;
