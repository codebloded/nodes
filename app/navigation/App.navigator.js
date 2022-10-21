import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home.screen';
import ProfileScreen from '../screens/Profile.screen';
import ChatScreen from '../screens/Chat.screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import { TabIcon } from '../styles/Profile.styles';
import ResetPassword from '../screens/ResetPassword.screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				options={{ headerShown: false }}
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
				options={{ headerShown: false }}
				component={ProfileScreen}
			/>
			<Stack.Screen
				name="reset"
				options={{ headerShown: false }}
				component={ResetPassword}
			/>
		</Stack.Navigator>
	);
};
const ChatStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Message"
				options={{ headerShown: false }}
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
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveBackgroundColor: '#fafafa',
					tabBarInactiveBackgroundColor: '#fafafa',
				}}>
				<Tab.Screen

					name="Feed"
					options={({ navigation }) => ({
						headerStyle: {
							backgroundColor: '#fafafa',
						},
						headerTitle: 'Nodes',
						headerTitleAlign: 'center',
						headerTintColor: '#333',
						headerRight: () => (
							<TouchableOpacity>
								<Ionicons
									name="ios-paper-plane"
									size={25}
									color="#333"
									style={{ marginRight: 15 }}
								/>
							</TouchableOpacity>
						),
						headerLeft: () => (
							<TouchableOpacity>
								<Ionicons
									name="ios-add-circle-sharp"
									size={28}
									color="#333"
									style={{ marginLeft: 15 }}
								/>
							</TouchableOpacity>
						),
						tabBarIcon: ({ focused }) => (
							<View>
								<Octicons
									name="home"
									size={25}
									color={focused ? 'black' : '#6666'}
								/>
							</View>
						),
					})}
					component={FeedStack}
				/>
				<Tab.Screen
					name="Chat"
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<AntDesign
									name="message1"
									size={25}
									color={focused ? 'black' : '#6666'}
								/>
							</View>
						),
					}}
					component={ChatStack}
				/>
				<Tab.Screen
					name="x"
					options={{
						tabBarIcon: ({ focused, props }) => (
							<View>
								<AntDesign
									name="hearto"
									size={25}
									color={focused ? 'black' : '#6666'}
								/>
							</View>
						),
					}}
					component={ChatStack}
				/>
				<Tab.Screen
					name="Profile"

					options={({ navigation }) => ({
						tabBarIcon: ({ focused }) => (
							<View>
								{focused ?
									<View style={{ borderWidth: 3, borderRadius: 20, borderColor: "#222" }}>
										<Avatar.Image size={30} source={require("../assets/usr.jpg")} />
									</View>
									:
									<Avatar.Image size={30} source={require("../assets/usr.jpg")} />
								}
							</View>
						),
						headerLeft: () => (
							<TouchableOpacity>
								<Ionicons
									name="ios-arrow-back-sharp"
									size={28}
									color="#333"
									style={{ marginLeft: 15 }}
									onPress={() => navigation.goBack()}
								/>
							</TouchableOpacity>
						),
					})}
					component={ProfileStack}
				/>
			</Tab.Navigator>
		</>
	);
};

export default AppNavigator;
