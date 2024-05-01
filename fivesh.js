import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function TabFiveScreen() {
  const [moneyEarned, setMoneyEarned] = useState('');
  const [moneySpent, setMoneySpent] = useState('');
  const [stockUsed, setStockUsed] = useState('');
  const [totalStock, setTotalStock] = useState('');
  const [remainingStock, setRemainingStock] = useState(0);

  const handleAddUpdate = () => {
    const moneyEarned = parseFloat(moneyEarned || 0);
    const moneySpent = parseFloat(moneySpent || 0);
    const totalStock = parseFloat(stockUsed || 0);
    const RemainingStock = totalStock - stockUsed;
    setRemainingStock(RemainingStock);

    setMoneyEarned('');
    setMoneySpent('');
    setStockUsed('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f2f1f1', padding: 20,top:230 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>DAILY BUSINESS UPDATES</Text>
      <TextInput
        placeholder="Money Earned"
        value={moneyEarned}
        onChangeText={setMoneyEarned}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Money Spent"
        value={moneySpent}
        onChangeText={setMoneySpent}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Stock Used"
        value={stockUsed}
        onChangeText={setStockUsed}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Total Stock"
        value={totalStock}
        onChangeText={setTotalStock}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <Button title="Add Update" onPress={handleAddUpdate} />
      <Text style={{ marginTop: 20 }}></Text>
    </View>
  );
}
