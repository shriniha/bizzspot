import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Product = ({ title, subtitle, cost, valueChangeByHour, logo }) => {
  const isNegativeChange = valueChangeByHour < 0;

  return (
    <View style={styles.productContainer}>
      <Image source={logo} style={styles.logo} resizeMode='40' />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.costContainer}>
        <Text style={styles.cost}>{cost}</Text>
        <Text
          style={[
            styles.percentage,
            isNegativeChange ? styles.negativePercentage : styles.positivePercentage,
          ]}
        >
          {valueChangeByHour}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 100,
    height: 70,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
  },
  costContainer: {
    alignItems: 'flex-end',
  },
  cost: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: 14,
    marginTop: 5,
  },
  positivePercentage: {
    color: 'green',
  },
  negativePercentage: {
    color: 'red',
  },
});

export default Product;
