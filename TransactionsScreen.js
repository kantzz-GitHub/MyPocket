import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export const transactions = [
  { id: 1, name: 'Groceries', amount: '$50', location: 'Walmart, New York', date: 'March 26, 2024' },
  { id: 2, name: 'Dinner', amount: '$30', location: 'Restaurant, San Francisco', date: 'March 25, 2024' },
  { id: 3, name: 'Fuel', amount: '$40', location: 'Gas Station, Los Angeles', date: 'March 24, 2024' },
  { id: 4, name: 'Movie Tickets', amount: '$20', location: 'Cinema, Chicago', date: 'March 23, 2024' },
  { id: 5, name: 'Books', amount: '$25', location: 'Bookstore, Seattle', date: 'March 22, 2024' },
];

const TransactionsScreen = ({ navigation }) => {
  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
        <Text style={{fontSize: 20}}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TransactionsScreen;

