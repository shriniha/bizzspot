import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { useNavigation } from "@react-navigation/native";

const EditProfile = ({ navigation }) => {
  const selectedImage = require("./image1.jpg");
  const [name, setName] = useState("Shri");
  const [email, setEmail] = useState("shri@gmail.com");
  const [password, setPassword] = useState("randompassword");
  const [country, setCountry] = useState("India");

  // Additional details
  const [shopName, setShopName] = useState("Shri's Emporium");
  const [shopType, setShopType] = useState("Clothing");
  const [address, setAddress] = useState("123 Main Street");
  const [phone, setPhone] = useState("+1 (555) 123-4567");

  // Date of Birth
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  function renderDatePicker() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "#90b1db", // Specify your color
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              padding: 35,
              width: "90%",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: "#90b1db", // Specify your color
                textHeaderColor: "#003a88",
                textDefaultColor: "#dfe9f5",
                selectedTextColor: "#dfe9f5",
                mainColor: "#003a88",
                textSecondaryColor: "#dfe9f5",
                borderColor: "rgba(122,146,165,0.1)",
              }}
            />

            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text style={{ color: "#dfe9f5" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        top: 20,
        backgroundColor: "white",
        paddingHorizontal: 22,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#003a88" />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#003a88" }}>
          Edit Profile
        </Text>
      </View>

      <ScrollView>
        {/* Image and Camera Icon */}
        <View
          style={{
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          <TouchableOpacity>
            <Image
              source={selectedImage}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: "#003a88", // Specify your color
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <MaterialIcons name="photo-camera" size={32} color="#003a88" />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={{top:5}}> 
          

          {/* Existing Fields */}
          <View style={{ flexDirection: "column", marginBottom: 6 }}>
            <Text style={{ fontSize: 16, color: "#003a88" }}>Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
              />
            </View>
            </View>

{/* Email */}
<View style={{ flexDirection: "column", marginBottom: 6 }}>
  <Text style={{ fontSize: 16, color: "#003a88" }}>Email</Text>
  <View style={styles.inputContainer}>
    <TextInput
      value={email}
      onChangeText={(value) => setEmail(value)}
      editable={true}
    />
  </View>
</View>

{/* Password */}
<View style={{ flexDirection: "column", marginBottom: 6 }}>
  <Text style={{ fontSize: 16, color: "#003a88" }}>Password</Text>
  <View style={styles.inputContainer}>
    <TextInput
      value={password}
      onChangeText={(value) => setPassword(value)}
      editable={true}
      secureTextEntry
    />
  </View>
</View>

{/* Date of Birth */}
<View style={{ flexDirection: "column", marginBottom: 6}}>
  <Text style={{ fontSize: 16, color: "#003a88" }}>Date of Birth</Text>
  <TouchableOpacity
    onPress={handleOnPressStartDate}
    style={styles.inputContainer}
  >
    <Text>{selectedStartDate}</Text>
  </TouchableOpacity>
</View>
{/* Shop Name */}
<View style={{ flexDirection: "column", marginBottom: 6}}>
            <Text style={{ fontSize: 16, color: "#003a88" }}>Shop Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={shopName}
                onChangeText={(value) => setShopName(value)}
                editable={true}
              />
            </View>
          </View>

          {/* Shop Type */}
          <View style={{ flexDirection: "column", marginBottom: 6}}>
            <Text style={{ fontSize: 16, color: "#003a88" }}>Shop Type</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={shopType}
                onChangeText={(value) => setShopType(value)}
                editable={true}
              />
            </View>
          </View>

          {/* Address */}
          <View style={{ flexDirection: "column", marginBottom: 6 }}>
            <Text style={{ fontSize: 16, color: "#003a88" }}>Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={address}
                onChangeText={(value) => setAddress(value)}
                editable={true}
              />
            </View>
          </View>

          {/* Phone */}
          <View style={{ flexDirection: "column", marginBottom: 6 }}>
            <Text style={{ fontSize: 16, color: "#003a88" }}>Phone</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={phone}
                onChangeText={(value) => setPhone(value)}
                editable={true}
              />
            </View>
          </View>

<View style={{top:20}}>
<TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>

  <Text style={{ fontSize: 18, color: "white" }}>
    Save Changes
  </Text>
</TouchableOpacity>
</View>

{renderDatePicker()}
</ScrollView>
</ScrollView>
</SafeAreaView>
);
};

const styles = {
inputContainer: {
height: 44,
width: "100%",
borderColor: "#003a88",
borderWidth: 1,
borderRadius: 4,
marginVertical: 6,
justifyContent: "center",
paddingLeft: 8,
},
saveButton: {
backgroundColor: "#003a88",
height: 44,
borderRadius: 6,
alignItems: "center",
justifyContent: "center",
marginVertical: 20,
top: -40,
},
};

export default EditProfile;
         
