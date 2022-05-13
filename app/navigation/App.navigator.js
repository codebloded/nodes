import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home.screen';
import ProfileScreen from '../screens/Profile.screen';
import ChatScreen from '../screens/Chat.screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User Profile"
        options={{headerShown: false}}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Message"
        options={{headerShown: false}}
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{tabBarShowLabel: false}}>
        <Tab.Screen
          name="Feed"
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Feather
                  name="home"
                  size={25}
                  color={focused ? 'blue' : 'grey'}
                />
              </View>
            ),
          }}
          component={FeedStack}
        />
        <Tab.Screen
          name="Chat"
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <AntDesign
                  name="message1"
                  size={25}
                  color={focused ? 'blue' : 'grey'}
                />
              </View>
            ),
          }}
          component={ChatStack}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <MaterialCommunityIcons
                  name="account"
                  size={25}
                  color={focused ? 'blue' : 'grey'}
                />
              </View>
            ),
          }}
          component={ProfileStack}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
