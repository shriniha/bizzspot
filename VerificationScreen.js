import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationScreen = ({ route, navigation }) => {
    const { totalCost, title, cost } = route.params;
  const [pin, setPin] = useState('');

  const handleProceed = () => {
    // Check if the entered PIN is valid (e.g., 6 digits)
    if (pin.length === 6 && !isNaN(pin)) {
        navigation.navigate('ConfirmationScreen',{title,cost});
          // Navigate back to the BuyScreen or any other relevant screen
    } else {
      // Show an alert or handle invalid PIN
      // Example:
      alert('Please enter a valid 6-digit PIN.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Confirm to Purchase</Text>
      <Text>Enter the TPIN verification PIN</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={6}
        value={pin}
        onChangeText={setPin}
      />
      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed</Text>
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
  input: {
    borderWidth: 4,
    borderColor: 'lightblue',
    paddingHorizontal: 10,
    marginTop: 10,
    width: 150,
  },
  proceedButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VerificationScreen;
