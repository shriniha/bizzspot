// Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ logo, text, netWorth }) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.netWorth}>{netWorth}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    
  },
  leftContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    width: 95,
    height: 40,
    resizeMode: '40',
  },
  headerText: {
    fontSize: 18,
    color: '#000000',
    textAlign:'center'
  },
  netWorth: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Header;