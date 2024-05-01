import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const BuyScreen = ({ route, navigation }) => {
  const { title, subtitle, cost } = route.params;
  const [quantity, setQuantity] = useState('1');
  const [totalCost, setTotalCost] = useState((cost * 1).toFixed(2));
  const [balance, setBalance] = useState(route.params.updatedBalance || 500); // Initial balance or use the updated balance
  const [sharesBought, setSharesBought] = useState(0);

  useEffect(() => {
    const inputQuantity = parseInt(quantity) || 0;
    const calculatedTotalCost = (cost * inputQuantity).toFixed(2);
    setTotalCost(calculatedTotalCost);
  }, [quantity, cost]);

  const handleQuantityChange = (text) => {
    setQuantity(text);
  };

  const handleBuy = () => {
    const purchaseAmount = parseFloat(totalCost);
    if (purchaseAmount > balance) {
      Alert.alert(
        'Imbalance',
        'Insufficient balance. Cannot proceed with the purchase.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      const newBalance = balance - purchaseAmount;
      setBalance(newBalance);
      const boughtQuantity = parseInt(quantity) || 0;
      setSharesBought(sharesBought + boughtQuantity);
      navigation.navigate('VerificationScreen', { totalCost,title,cost });
     
      
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.productDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.price}>Price: {cost}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <Text>Quantity                                                                             </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={quantity}
          onChangeText={handleQuantityChange}
        />
      </View>

      {/* Purchase Cost and Box Container for Total Cost */}
      <View style={styles.totalCost}>
        <Text>Purchase Cost                                                           </Text>
        <View style={styles.boxContainer}>
          <Text style={styles.totalCostText}>{`${totalCost}`}</Text>
        </View>
      </View>

      {/* Balance Display */}
      <View style={styles.totalCost}>
        <Text>Balance                                                                        </Text>
        <View style={styles.boxContainer}>
          <Text style={styles.totalCostText}>{`${balance.toFixed(2)}`}</Text>
        </View>
      </View>

      {/* Shares on Hand */}
      <View style={styles.totalCost}>
        <Text>Shares on Hand                                                                      </Text>
        <View style={styles.boxContainer}>
          <Text style={styles.totalCostText}>{`${sharesBought}`}</Text>
        </View>
      </View>

      {/* Buy Button */}
      <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    productDetails: {
      alignItems: 'flex-start',
      marginBottom: 20,
    },
    title: {
      fontSize: 38,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
    },
    price: {
      fontSize: 16,
      color:'gray',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      paddingHorizontal: 18,
      marginLeft: 10,
      width: 50,
    },
    totalCost: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', // Aligns text and box containers on opposite sides
      marginBottom: 20,
    },
    boxContainer: {
      flexDirection: 'row', // To align text and box container in a row
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'lighblue',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10, // Add right margin for space between text and box container
    },
    totalCostText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10, // Add right margin for space between text and box container
    },
    buyButton: {
      backgroundColor: 'green',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'normal',
    },
});



export default BuyScreen;