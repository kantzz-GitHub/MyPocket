// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// export const transactions = [
//   { id: 1, name: 'Groceries', amount: '$50', location: 'Walmart, New York', date: 'March 26, 2024' },
//   { id: 2, name: 'Dinner', amount: '$30', location: 'Restaurant, San Francisco', date: 'March 25, 2024' },
//   { id: 3, name: 'Fuel', amount: '$40', location: 'Gas Station, Los Angeles', date: 'March 24, 2024' },
//   { id: 4, name: 'Movie Tickets', amount: '$20', location: 'Cinema, Chicago', date: 'March 23, 2024' },
//   { id: 5, name: 'Books', amount: '$25', location: 'Bookstore, Seattle', date: 'March 22, 2024' },
// ];

// const TransactionsScreen = ({ navigation }) => {
//   const renderTransactionItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
//         <Text style={{fontSize: 20}}>{item.name}</Text>
//         <Text style={{fontSize: 20}}>{item.amount}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={transactions}
//         renderItem={renderTransactionItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default TransactionsScreen;

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, TextInput, Modal, StyleSheet } from 'react-native';

export const transactions = [
  { id: 1, name: 'Groceries', amount: '$50', location: 'Walmart, New York', date: 'March 26, 2024' },
  { id: 2, name: 'Dinner', amount: '$30', location: 'Restaurant, San Francisco', date: 'March 25, 2024' },
  { id: 3, name: 'Fuel', amount: '$40', location: 'Gas Station, Los Angeles', date: 'March 24, 2024' },
  { id: 4, name: 'Movie Tickets', amount: '$20', location: 'Cinema, Chicago', date: 'March 23, 2024' },
  { id: 5, name: 'Books', amount: '$25', location: 'Bookstore, Seattle', date: 'March 22, 2024' },
];

const TransactionsScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemLocation, setNewItemLocation] = useState('');
  const [newItemDate, setNewItemDate] = useState('');

  const addNewItem = () => {
    if (newItemName && newItemAmount && newItemLocation && newItemDate) {
      const newTransaction = {
        id: transactions.length + 1,
        name: newItemName,
        amount: newItemAmount,
        location: newItemLocation,
        date: newItemDate
      };
      transactions.push(newTransaction);
      // Reset input fields and close modal
      setNewItemName('');
      setNewItemAmount('');
      setNewItemLocation('');
      setNewItemDate('');
      setIsModalVisible(false);
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Add New Item" onPress={() => setIsModalVisible(true)} />
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
              <Text style={{fontSize: 20}}>{item.name}</Text>
              <Text style={{fontSize: 20}}>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Item</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={newItemName}
              onChangeText={text => setNewItemName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={newItemAmount}
              onChangeText={text => setNewItemAmount(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={newItemLocation}
              onChangeText={text => setNewItemLocation(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              value={newItemDate}
              onChangeText={text => setNewItemDate(text)}
            />
            <Button title="Add" onPress={addNewItem} />
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default TransactionsScreen;
