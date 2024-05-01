import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const SoldScreen = ({ route, navigation }) => {
  const [countdown, setCountdown] = useState(5);
  const [showPopUp, setShowPopUp] = useState(false);
  const [soldShares, setSoldShares] = useState(0);
  const { title, cost } = route.params;

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setShowPopUp(true);
      setSoldShares(route.params?.soldShares || 0);
    }
  }, [countdown, route.params]);

  const handleDone = () => {
    setShowPopUp(false);
    navigation.goBack(); // Return back from SoldScreen
  };

  const handleOrderDetails = () => {
    navigation.navigate('SoldDetails',{title,cost}); // Navigate to the 'solddetails' screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countdownText}>{countdown}</Text>
      <Image source={require('./pay22.png')} style={styles.image} />
      <Text style={styles.processingText}>Processing</Text>

      {/* Display Pop-up after countdown */}
      {showPopUp && (
        <View style={styles.overlay}>
          <View style={styles.popUpContainer}>
            <TouchableOpacity onPress={() => setShowPopUp(false)} style={styles.closeButton}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Close</Text>
            </TouchableOpacity>
            <Image source={require('./checked.png')} style={styles.additionalImage} />
            <Text style={styles.successText}>Sell Successful</Text>
            <Text>Shares sold</Text>
            <TextInput
              keyboardType="numeric"
              value={soldShares.toString()}
              // If you want to edit the sold shares, handle onChangeText to update 'soldShares'
              onChangeText={(text) => setSoldShares(text)}
              style={styles.input}
            />
            <Text>Type : Delivery</Text>
            {/* Order Details and Done button */}
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleOrderDetails}>
                <Text>Order Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleDone}>
                <Text>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
  countdownText: {
    fontSize: 24,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  processingText: {
    fontSize: 18,
    marginBottom: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  popUpContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
    maxWidth: 300, // Adjust the maximum width as per your design
  },
  additionalImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: '#CCCCCC',
    padding: 8,
    marginBottom: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
});

export default SoldScreen;
