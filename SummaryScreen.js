import React from 'react';
import { View, Text } from 'react-native';
import { transactions } from './TransactionsScreen';

const SummaryScreen = () => {
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
      <Text style={{fontSize: 20}}>Top Expense: {topExpense.name} - {topExpense.amount}</Text>
      <Text style={{fontSize: 20}}>Lowest Expense: {lowestExpense.name} - {lowestExpense.amount}</Text>
    </View>
  );
};

export default SummaryScreen;

