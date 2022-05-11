import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home.screen';

const AppStack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
