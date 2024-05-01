// SellScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SellScreen = ({ route,navigation }) => {
  const { title, subtitle, cost,updateSharesInHand } = route.params;
  const [shares, setShares] = useState(5);
  const [targetedGain, setTargetedGain] = useState('');
  const [sharesToSell, setSharesToSell] = useState('');
  
  const handleSell = () => {
    const sellAmount = parseInt(sharesToSell);
    if (sellAmount > shares) {
      Alert.alert('Insufficient Shares', 'You are trying to sell more shares than you have.');
      return;
    }

    const updatedShares = calculateSharesLeft(parseInt(sharesToSell));
    setShares(updatedShares);
    updateSharesInHand(updatedShares);

    navigation.navigate('SoldScreen', { title,cost,soldShares: sellAmount });
    // You can perform any necessary calculations or actions when selling shares
    // For example, update shares in hand, perform the selling action, etc.
  };

  const calculateResult = (value) => {
    // Function to calculate the result dynamically based on the entered number of shares
    const result = cost * value;
    return result;
  };

  const calculateSharesLeft = (value) => {
    // Function to calculate the remaining shares after selling
    const remainingShares = shares - value;
    return remainingShares >= 0 ? remainingShares : 0;
  };

  useEffect(() => {
    // Update shares in hand if received from Header
    if (route.params && route.params.updatedShares) {
      setShares(route.params.updatedShares);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.cost}>Price : {cost}</Text>

      <View style={styles.inputContainer}>
        <Text></Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter number of shares"
          value={sharesToSell}
          onChangeText={(text) => {
            const value = parseInt(text) || 0;
            setSharesToSell(text);
            setTargetedGain(calculateResult(value).toString());
          }}
        />
        <Text>Targeted Gain                                                         {targetedGain}</Text>
        <Text>Shares in Hand                                                         {shares}</Text>
        <Text>Shares Left                                                             2{calculateSharesLeft(parseInt(sharesToSell))}</Text>
      </View>

      <TouchableOpacity style={styles.sellButton} onPress={handleSell}>
        <Text style={styles.buttonText}>Sell</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
  },
  text1:{
    fontSize:20,
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  cost: {
    fontSize: 20,
    marginBottom: 20,
    color:'gray',
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginBottom: 10,
  },
  sellButton: {
    backgroundColor: 'red',
    padding:15,
    borderRadius: 10,
    marginBottom:-10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SellScreen;
