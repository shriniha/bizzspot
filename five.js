import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Clipboard, Alert } from 'react-native';

const Header = ({ route, navigation }) => {
  const [balance, setBalance] = useState(100);
  const [inputAmount, setInputAmount] = useState('');
  const [sharesInHand, setSharesInHand] = useState(15);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showBills, setShowBills] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  
  useEffect(() => {
    if (route.params && route.params.updatedShares) {
      setSharesInHand(route.params.updatedShares);
    }
  }, [route.params]);

  const handleAmountUpdate = () => {
    const newBalance = parseFloat(inputAmount) || 0;
    setBalance(newBalance);
    setInputAmount('');
    navigation.navigate('ProductList', { updatedBalance: newBalance });
  };

  const handleSignOut = () => {
  };

  const handleShowBills = () => {
    setShowBills(!showBills);
  };
  const handleCopyReferralCode = () => {
    const newReferralCode = Math.floor(Math.random() * 100000).toString();
    Clipboard.setString(newReferralCode);
    setReferralCode(newReferralCode);
    Alert.alert('Referral code copied: ' + newReferralCode);
  };

  const handleShowBankDetails = () => {
    setShowBankDetails(!showBankDetails);
    setShowOrders(false);
  };

  const handleShowOrders = () => {
    setShowOrders(!showOrders);
    setShowBankDetails(false);
  };

  const descriptions = [
    "Artel",
    "Jio",
    "Reliance",
    "Starbucks",
    "Annapoorna"
  ];
  
  const statuses = ["Pending", "Paid", "Pending", "Paid", "Pending"];

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <View style={styles.topSection}>
        <Image source={require('./payment.png')} style={styles.topImage} />
        <View style={styles.topTextContainer}>
          <Text style={styles.costText}>{balance.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.logoSection}>
        <Image source={require('./image1.jpg')} style={styles.logoImage} />
        <View style={styles.logoTextContainer}>
          <Text style={styles.logoText}>Shri</Text>
          <Text style={styles.emailText}>shri@gmail.com</Text>
        </View>
      </View>
      <View style={styles.balanceInputContainer}>
        <Text style={styles.balanceInputLabel}>Add Amount</Text>
        <View style={styles.balanceInput}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={inputAmount}
            onChangeText={setInputAmount}
            placeholder="Enter Amount"
          />
          <TouchableOpacity style={styles.updateButton} onPress={handleAmountUpdate}>
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sharesContainer}>
        <Text style={styles.sharesText}>Shares in Hand  {sharesInHand}</Text>
        </View>
         {/* Referral Code Container */}
         <TouchableOpacity style={styles.referralContainer} onPress={handleCopyReferralCode}>
          <Image source={require('./invite.png')} style={styles.referralIcon} />
          <View>
            <Text style={styles.title}>Invite</Text>
            <Text style={styles.subtitle}>Get referral code</Text>
          </View>
        </TouchableOpacity>

        {/* Bills Container */}
        <TouchableOpacity style={styles.billsContainer} onPress={handleShowBills}>
          <Image source={require('./bill.png')} style={styles.billsIcon} />
          <View>
            <Text style={styles.title}>Bills</Text>
            <Text style={styles.subtitle}>Recharges</Text>
          </View>
        </TouchableOpacity>

        {/* Bills Scrollable View */}
        {showBills && (
          <View style={styles.billsListContainer}>
          <View style={styles.billsListContainer}>
          <ScrollView>
    {Array.from({ length: 5 }, (_, index) => (
      <View key={index} style={styles.billItem}>
        <Text style={styles.billText}>Bill {index + 1}</Text>
        <View>
          <Text style={styles.text1}>Amount: ${(index+1) * 50}</Text>
          <Text style={styles.dueDate}>Due Date: December {index+2}, 2023</Text>
          <Text style={styles.description}>Description: {descriptions[index]}</Text>
          <Text style={styles.status}>Status: {statuses[index]}</Text>
        </View>
      </View>
    ))}
  </ScrollView>
</View>

 
</View>
)}

        {/* ... existing code ... */}

        <TouchableOpacity style={styles.leftCornerContainer} onPress={handleShowBankDetails}>
          <Image source={require('./museum.png')} style={styles.leftCornerIcon} />
          <View>
            <Text style={styles.title}>Bank Details</Text>
            <Text style={styles.subtitle}>Banks & AutoPay mandates</Text>
          </View>
        </TouchableOpacity>

        {showBankDetails && (
          <View style={styles.bankDetailsContainer}>
            <ScrollView>
              <View style={styles.bankItem}>
                <Text style={styles.bankName}>KARUR VYSYA BANK</Text>
                <Text style={styles.bankText}>(Primary bank)</Text>
                <Text style={styles.bankText}>✓ Verified</Text>
              </View>
              <View style={styles.bankItem}>
                <Text style={styles.bankName}>CANARA BANK</Text>
                <Text style={styles.bankText}>(Secondary bank)</Text>
                <Text style={styles.bankText}>✓ Verified</Text>
              </View>
            </ScrollView>
          </View>
        )}

        <TouchableOpacity style={styles.anotherContainer} onPress={handleShowOrders}>
          <Image source={require('./booking.png')} style={styles.anotherIcon} />
          <View>
            <Text style={styles.title}>All Orders</Text>
            <Text style={styles.subtitle}>Keep track of orders</Text>
          </View>
        </TouchableOpacity>

        {showOrders && (
          <View style={styles.ordersContainer}>
            <ScrollView>
              <View style={styles.orderItem}>
                <Text style={styles.orderText}>SHAKTHI MILLS</Text>
                <Text style={styles.orderText1}>Sold 2 Stocks</Text>
                <Text style={styles.orderStatus}>Purchased</Text>
              </View>
              <View style={styles.orderItem}>
                <Text style={styles.orderText}>RAM MACHINERIES</Text>
                <Text style={styles.orderText1}>Purchased 4 Stocks</Text>
                <Text style={styles.orderStatus}>Delivered</Text>
              </View>
              {/* Add more order items as needed */}
            
            </ScrollView>
          </View>
        )}

        <TouchableOpacity style={styles.signoutButton} onPress={handleSignOut}>
          <Text style={styles.signoutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
  },
  referralContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  referralIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  billsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  billsIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  billsListContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  billItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  billText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderText1:{
    fontSize: 12,
    fontWeight: '400',
    marginHorizontal:20,
    marginVertical:5,
    color:'gray',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,

  },
  topImage: {
    width: 150,
    height: 150,
    top: 60,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'stretch',
    marginBottom: 20,
    marginHorizontal:140,

  },
  topTextContainer: {
    flexDirection: 'column',
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 50,
  },
  costText: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 230,
    marginHorizontal:-100,
  
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    top: 50,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    top: 80,
    marginVertical:-40,
    resizeMode:'contain',
  },
  logoTextContainer: {
    flexDirection: 'column',
    top: 50,
    marginVertical:-40,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 50,
    marginVertical:-20,
  },
  emailText: {
    fontSize: 14,
    color: 'gray',
    top: 50,
    marginVertical:20,
  },
  signoutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    top:520,
  },
  balanceInputContainer:{
    marginVertical:190,
    marginHorizontal:10
  },
  updateButton:{
    marginVertical:5,
    marginHorizontal:1,
  },
  signoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sharesContainer: {
    marginTop: -190,
    marginLeft:40,
    alignItems: 'center',
  },
  sharesText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  leftCornerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  leftCornerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  anotherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  anotherIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },

  bankDetailsContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  bankItem: {
    marginBottom: 10,
  },
  bankName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bankText: {
    fontSize: 14,
    color: 'gray',
  },
  ordersContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderStatus: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Header;
