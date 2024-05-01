//confirmation screen
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmationScreen = ({ route,navigation }) => {
  const [countdown, setCountdown] = useState(3);
  const [randomValue, setRandomValue] = useState(Math.floor(Math.random() * 100));
  const [increase, setIncrease] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const { title, cost } = route.params;

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          clearInterval(interval);
          setModalVisible(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const changeRandomValue = setInterval(() => {
      const newValue = Math.floor(Math.random() * 100);
      setRandomValue(newValue);
      setIncrease(newValue > randomValue);
    }, 2000);

    return () => clearInterval(changeRandomValue);
  }, [randomValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.countdown}>{countdown}</Text>
      <Image source={require('./gpay.png')} style={styles.image} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.tickContainer}>
              <Image source={require('./checked.png')} style={styles.tickImage} />
              <Text style={styles.orderPlacedText}>Order Placed</Text>
              <Text style={styles.keyValue}>
                Type: Delivery {'\n'}
                Share: 
                <Text style={{ color: increase ? 'green' : 'red' }}>
                  {randomValue}
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.orderDetailsButton}
              onPress={() => {
                // Handle navigating to order details screen
                navigation.navigate('OrderDetailsScreen',{title,cost});
              }}
            >
              <Text style={styles.orderDetailsButtonText}>Order Details</Text>
            </TouchableOpacity>
            
            {/* "Done" Button */}
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => {
                setModalVisible(false); // Close the modal
                // Navigate back to the previous screen
                navigation.goBack();
              }}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countdown: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  tickContainer: {
    alignItems: 'center',
  },
  tickImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  orderPlacedText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  keyValue: {
    textAlign: 'center',
  },
  orderDetailsButton: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  orderDetailsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  doneButton: {
    marginTop: 10,
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  doneButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;