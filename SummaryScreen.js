import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { firebaseConfig } from './firebaseConfig';

const firebaseUrl = `https://rn-lab-4-default-rtdb.firebaseio.com/transactions.json`;

const SummaryScreen = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
    const fetchInterval = setInterval(fetchTransactions, 5000); // Fetch every 5 seconds
    return () => clearInterval(fetchInterval);
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(firebaseUrl);
      const data = response.data;
      if (data) {
        const transactionsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setTransactions(transactionsArray);
      }
    } catch (error) {
      console.log('Error fetching transactions: ', error);
    }
  };

  // Calculate total number of items
  const totalItems = transactions.length;

  // Calculate total amount spent
  const totalSpent = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount.replace('$', '')), 0).toFixed(2);

  // Find highest and lowest expenses
  const sortedTransactions = [...transactions].sort((a, b) => parseFloat(b.amount.replace('$', '')) - parseFloat(a.amount.replace('$', '')));
  const topExpense = sortedTransactions[0];
  const lowestExpense = sortedTransactions[sortedTransactions.length - 1];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 20}}>Total Transactions: {totalItems}</Text>
      <Text style={{fontSize: 20}}>Total Spent: ${totalSpent}</Text>
      <Text style={{fontSize: 20}}>Top Expense: {topExpense ? `${topExpense.name} - ${topExpense.amount}` : 'N/A'}</Text>
      <Text style={{fontSize: 20}}>Lowest Expense: {lowestExpense ? `${lowestExpense.name} - ${lowestExpense.amount}` : 'N/A'}</Text>
    </View>
  );
};

export default SummaryScreen;
