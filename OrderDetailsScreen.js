import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderDetailsScreen = ({ route }) => {
  const { title, cost } = route.params;

  // Function to generate a random alphanumeric string for Order Id
  const generateOrderId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const orderIdLength = 28;
    let orderId = '';
    for (let i = 0; i < orderIdLength; i++) {
      orderId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return orderId;
  };

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return now.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
      <Text style={styles.label}>Current Date & Time:</Text>
        <Text style={styles.value}>{getCurrentDateTime()}</Text>

        {/* ... */}
        <Text style={styles.label}>Title:{title}</Text>
        <Text style={styles.label}>Price:{cost}</Text>
        <Text style={styles.label}>Order : Market</Text>
        <Text style={styles.label}>Type : Delivery</Text>
        <Text style={styles.label}>Subtype : Regular</Text>
        <Text style={styles.label}>Validity : Day End</Text>
        <Text style={styles.label}>Exchange : NSE</Text>
        <Text style={styles.label}>Trade Type : Short-Time</Text>

        {/* Order Id */}
        <Text style={styles.label}>Order Id:</Text>
        <Text style={styles.value}>{generateOrderId()}</Text>

      </View>
      <View style={styles.additionalBox}>
        {/* ORDER STATUS Box */}
        <View style={styles.statusBox}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusHeaderText}>ORDER STATUS</Text>
            <Text style={styles.tick}>Successfull</Text>
          </View>

          {/* Status details */}
          <View style={styles.statusDetails}>
            <View style={styles.statusLine}>
              <Text style={styles.statusTitle}>Request verified</Text>
              <Text style={styles.tick1}>✓</Text>
            </View>
            <Text style={styles.dateTime}>{getCurrentDateTime()}</Text>
            <Text style={styles.orderId}>Order Id: {generateOrderId()}</Text>
          </View>
          <View style={styles.statusLine}>
              <Text style={styles.statusTitle}>Order Placed with NSE</Text>
              <Text style={styles.tick1}>✓</Text>
            </View>
            <Text style={styles.dateTime}>{getCurrentDateTime()}</Text>
            <Text style={styles.orderId}>Order Id: {generateOrderId()}</Text>


          {/* Repeat for other status lines */}
          {/* ... */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainBox: {
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  additionalBox: {
    width: '100%',
  },
  statusBox: {
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 10,
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  statusHeaderText: {
    fontWeight: 'bold',
  },
  tick: {
    fontSize: 15,
    color:'green',
  },
  tick1: {
    fontSize: 15,
  },
  statusDetails: {
    marginBottom: 20,
  },
  statusLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusTitle: {
    fontWeight: 'bold',
  },
  dateTime: {
    marginBottom: 5,
  },
  orderId: {
    fontStyle: 'italic',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    marginBottom: 10,
  },
});

export default OrderDetailsScreen;
