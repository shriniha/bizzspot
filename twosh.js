import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

function TabTwoScreen() {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'Shreya', time: '10:00 AM' },
    { text: 'Hi there!', sender: 'Yogesh', time: '10:05 AM' },
    { text: 'How are you?', sender: 'Pavithran', time: '10:10 AM' },
  ]);
  const [messageInput, setMessageInput] = useState('');

  const handleMessageSend = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        text: messageInput,
        sender: 'Shri', // You can replace 'User' with the actual sender's name
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ textAlign: 'center', fontSize: 24, marginVertical: 20, color: '#003a88',top:20 }}>Chat Room</Text>
      <ScrollView style={{ flex: 1 }}>
        {messages.map((message, index) => (
          <View key={index} style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', color: '#003a88' }}>{message.sender}</Text>
              <Text style={{ color: '#003a88' }}>{message.time}</Text>
            </View>
            <View style={{ backgroundColor: '#dfe9f5', borderRadius: 8, padding: 8, marginTop: 5 }}>
              <Text style={{ color: '#003a88' }}>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 10 }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#dfe9f5',
            borderRadius: 25,
            marginRight: 10,
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: '#dfe9f5',
            color: '#003a88',
          }}
          placeholder="Type your message here"
          value={messageInput}
          onChangeText={(text) => setMessageInput(text)}
        />
        <TouchableOpacity onPress={handleMessageSend} style={{ backgroundColor: '#003a88', padding: 10, borderRadius: 20 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TabTwoScreen;
