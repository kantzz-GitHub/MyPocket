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
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange', // Header background color
        },
        headerTintColor: 'white', // Text color in header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Expenses" component={TransactionsScreen} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          "tabBarActiveTintColor": "orange",
          "tabBarInactiveTintColor": "black",
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        }}
      >
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;