import React from 'react';
import { View, Text } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'top', 
      alignItems: 'center',
      marginTop: 20
      }}>
      <Text style={{fontSize: 20}}>Amount Spent: {transaction.amount}</Text>
      <Text style={{fontSize: 20}}>Location: {transaction.location}</Text>
      <Text style={{fontSize: 20}}>Date: {transaction.date}</Text>
    </View>
  );
};

export default TransactionDetailScreen;
