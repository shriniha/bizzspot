// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SellScreen from './SellScreen';


const ProductDetail = ({ route, navigation }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('1Y');
  const [randomValues, setRandomValues] = useState({
    '1H': Math.floor(Math.random() * 20) - 10,
    '1 day': Math.floor(Math.random() * 40) - 20,
    '7 days': Math.floor(Math.random() * 80) - 40,
  });
  const [quantity, setQuantity] = useState(1);

  const { title, subtitle, cost, logo } = route.params;


  const generateRandomDataset = () => {
    const dataset = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    return dataset;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomValues({
        '1H': Math.floor(Math.random() * 20) - 10,
        '1 day': Math.floor(Math.random() * 40) - 20,
        '7 days': Math.floor(Math.random() * 80) - 40,
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleBuyPress = () => {
    navigation.navigate('BuyScreen', {
      title,
      subtitle,
      cost,
    });
  };

  const handleSellPress = () => {
    navigation.navigate('SellScreen', {
      title,
      subtitle,
      cost,
      updateSharesInHand: (updatedShares) => {
        // Perform navigation back to Header and pass the updatedShares value
        navigation.navigate('Header', { updatedShares });
      },
    });
  };

  const renderChartByTimePeriod = () => {
    switch (selectedTimePeriod) {
      case '1Y':
        return generateRandomDataset();
      case '3Y':
        return generateRandomDataset();
      case '5M':
        return generateRandomDataset();
      case '3W':
        return generateRandomDataset();
      case 'ALL':
        return generateRandomDataset();
      default:
        return generateRandomDataset();
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.topRow}>
      <View style={styles.titleSubtitleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.logo}>
          <Image source={logo} style={{ width: 100, height: 100 }} />
        </View>
      </View>

      <View style={styles.topRow}>
        <FontAwesome name="star" size={24} color="black" />
        <TouchableOpacity>
          <Text style={styles.wishlistText}>Wishlist</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.middleRow}>
        <Text style={styles.priceText}>Price</Text>
        <Text style={styles.price}>{cost}</Text>
      </View>

      
      <View style={styles.timePeriodContainer}>
        <Text style={styles.timePeriod}>{`1H: `}
          <Text style={{ color: randomValues['1H'] >= 0 ? 'green' : 'red' }}>
            {`${randomValues['1H']}%`}
          </Text>
        </Text>
        <Text style={styles.timePeriod}>{`1 day: `}
          <Text style={{ color: randomValues['1 day'] >= 0 ? 'green' : 'red' }}>
            {`${randomValues['1 day']}%`}
          </Text>
        </Text>
        <Text style={styles.timePeriod}>{`7 days: `}
          <Text style={{ color: randomValues['7 days'] >= 0 ? 'green' : 'red' }}>
            {`${randomValues['7 days']}%`}
          </Text>
        </Text>
      </View>

      <View style={styles.timePeriodButtonsContainer}>
        {['1Y', '3Y', '5M', '3W', 'ALL'].map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.timePeriodButton,
              selectedTimePeriod === period && styles.selectedTimePeriodButton,
            ]}
            onPress={() => setSelectedTimePeriod(period)}
          >
            <Text style={styles.timePeriodButtonText}>{period}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.chartTitle}>STATS</Text>
      <LineChart
        data={{
          datasets: [
            {
              data: renderChartByTimePeriod(),
            },
          ],
        }}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: '#003a88',
          backgroundGradientFrom: '#003a88',
          backgroundGradientTo: '#003a88',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 18,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#003a88',
          },
        }}
        bezier
        style={styles.chartStyle}
      />

      <View style={styles.bottomRow}>
        <TouchableOpacity style={[styles.button, styles.buyButton]} onPress={handleBuyPress}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.sellButton]} onPress={handleSellPress}>
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  titleSubtitleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartStyle:{
    marginHorizontal:15,
    marginBottom:-40,
    marginVertical:50,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
  },
  middleRow: {
    marginBottom: 16,
  },
  priceText: {
    fontSize: 18,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  timePeriodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginVertical: -10,
  },
  timePeriod: {
    fontSize: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginVertical: 15,
    marginHorizontal: 4,
  },
  wishlistText: {
    fontSize: 16,
    marginLeft: 5,
  },
  chartTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    top: 50,
    marginVertical: -60,
    marginHorizontal:150,
    fontWeight:'800',
    color:'gray',
  },
  timePeriodButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginHorizontal:40,
    marginVertical:20,
  },
  timePeriodButton: {
    padding: 20,
    borderRadius: 10,
    borderColor: '#007bff',
    justifyContent:'flex-start',// Change the border color as needed
  },
  selectedTimePeriodButton: {
    backgroundColor: '#BEBDB8', // Change the background color for the selected button
  },
  timePeriodButtonText: {
    fontSize: 16,
    color: '#007bff', // Change the text color as needed
  },
  button: {
    paddingHorizontal: 82,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  buyButton: {
    backgroundColor: 'green',
  },
  sellButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default ProductDetail;
