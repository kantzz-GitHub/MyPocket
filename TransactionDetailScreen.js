import React from 'react';
import { View, Text } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Amount Spent: {transaction.amount}</Text>
      <Text>Location: {transaction.location}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
};

export default TransactionDetailScreen;
