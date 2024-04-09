import { firebaseConfig } from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/database';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import TabNavigator from './TabNavigator';

const App = () => {
  return <TabNavigator style={styles.content}/>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
