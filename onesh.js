import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geocoder from 'react-native-geocoding';
import { Alert } from 'react-native';

const TabOneScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 11.0660358,
    longitude: 77.0919639,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [searchAddress, setSearchAddress] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('restaurants');

  const neelamburCoordinates = {
    latitude: 11.0660358,
    longitude: 77.0919639,
  };

  const [zones, setZones] = useState([
    { latitude: 11.0168, longitude: 76.9558, population: 'high' },
    { latitude: 11.0214, longitude: 76.9372, population: 'mid' },
    { latitude: 11.0598109, longitude: 77.0826532, population: 'mid' },
    { latitude: 11.0354097, longitude: 77.0306813, population: 'mid' },
    { latitude: 11.0794379, longitude: 76.9781068, population: 'mid' },
    { latitude: 10.9526614, longitude: 76.9322858, population: 'mid' },
    { latitude: 11.0248594, longitude: 77.1046683, population: 'mid' },
  ]);

  const trackUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const userCurrentLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setUserLocation(userCurrentLocation);
    setMapRegion(userCurrentLocation);
  };

  useEffect(() => {
    trackUserLocation();
  }, []);

  const handleSearch = async () => {
    // Retrieve the text from the search input field
    const location = searchAddress.trim(); // Assuming 'searchAddress' is the state for search input value

    if (!location) {
      Alert.alert('Please enter a location');
      return;
    }
  
    try {
      // Perform location redirection logic here using geocoding or any other method
      const response = await Geocoder.from(location); // Use your geocoding library or API here
      const { lat, lng } = response.results[0].geometry.location; // Extract latitude and longitude
  
      // Assuming 'setMapRegion' is a function to update the map's region
      setMapRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.05, // Adjust as needed
        longitudeDelta: 0.05, // Adjust as needed
      });
  
      // You can perform additional actions here based on the location if needed
  
    } catch (error) {
      console.error('Error while searching:', error);
      Alert.alert('Error', 'Unable to find the location');
    }
  };

  const renderZones = () => {
    return zones.map((zone, index) => {
      const baseColor = zone.population === 'high' ? '#FF0000' : '#FFFF00'; // Red or Yellow
      const lighterColor = zone.population === 'high' ? 'rgba(255,0,0,0.3)' : 'rgba(255,255,0,0.3)'; // Lighter Red or Yellow
      const radius = zone.population === 'high' ? 1000 : 500; // Change radius for different zones

      return (
        <Circle
          key={index}
          center={{ latitude: zone.latitude, longitude: zone.longitude }}
          radius={radius}
          fillColor={lighterColor}
          strokeColor={baseColor}
          strokeWidth={0.5}
          fillOpacity={0.5}
        />
      );
    });
  };

  const dropdownOptions = ['Restaurants', 'Hotels', 'Clothes'];

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FF6B6B', '#FFE66D']} style={styles.gradient}>
        <Text style={styles.label}>DISCOVER</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput style={styles.input} placeholder="Search..." value={searchAddress} onChangeText={(text) => setSearchAddress(text)} />
            <TouchableOpacity onPress={handleSearch}>
              <Icon name="search" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => setIsDropdownOpen(true)}>
              <Text>{selectedCategory}</Text>
            </TouchableOpacity>
            <Modal visible={isDropdownOpen} animationType="slide">
              <View style={styles.dropdownContainer}>
                <FlatList
                  data={dropdownOptions}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { setSelectedCategory(item); setIsDropdownOpen(false); }}>
                      <Text style={styles.dropdownItem}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </Modal>
          </View>
        </View>
      </LinearGradient>
      <MapView
        style={styles.map}
        region={mapRegion}
        onRegionChangeComplete={(region) => setMapRegion(region)}
      >
        {/* Marker for Neelambur */}
        <Marker
          coordinate={neelamburCoordinates}
          title="Neelambur, Coimbatore"
          description="This is Neelambur!"
        />
        {/* Marker for user location */}
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Your Location"
            description="This is your current location!"
          />
        )}
        {/* Render circles for populated zones */}
        {renderZones()}
      </MapView>
      <Button title="Track My Location" onPress={trackUserLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  gradient
  : {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  searchBar: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 4,
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginLeft: 10,
    flex: 1,
  },
  dropdownContainer: {
    marginTop: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
});

export default TabOneScreen;

