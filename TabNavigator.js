import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsScreen from './TransactionsScreen';
import SummaryScreen from './SummaryScreen';
import TransactionDetailScreen from './TransactionDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="History" component={TransactionsStack} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

