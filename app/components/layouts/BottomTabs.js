import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { ActivityIndicator, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Container } from '../../styles/Feed.style';

const Posts = [
    {
        id: 1,
        image: require('../../assets/x.png'),

    },
    {
        id: 2,
        image: require('../../assets/usr.jpg'),

    },
    {
        id: 3,
        image: require('../../assets/usr.jpg'),

    },
    {
        id: 4,
        image: require('../../assets/x.png'),

    },
    {
        id: 5,
        image: require('../../assets/usr.jpg'),

    },
    {
        id: 6,
        image: require('../../assets/x.png'),

    },
];
const BottomTabs = () => {
    const Tab = createMaterialTopTabNavigator();
    const Post = () => {
        return (


            <FlatList
                data={Posts}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Image style={{
                            height: 160,
                            width: 160,
                            marginHorizontal: 10,
                            marginVertical: 5,
                        }} source={item.image} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />




        );
    };

    const Videos = () => {
        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{
                    marginTop: 10,
                    marginHorizontal: 5,
                }}
            >
                <ActivityIndicator animating={true} />
            </ScrollView >
        );
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'white' },
                tabBarIndicatorStyle: { backgroundColor: 'black', height: 2 },
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'Posts') {
                        iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
                    } else if (route.name === 'Videos') {
                        iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={25} color={color} />;
                }
            })}
        >
            <Tab.Screen name="Posts" component={Post} />
            <Tab.Screen name="Videos" component={Videos} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({})

export default BottomTabs;
