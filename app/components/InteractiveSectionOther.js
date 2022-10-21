import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { SettingsIcon } from '../styles/Profile.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InteractiveSectionOther = () => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 15,

            marginHorizontal: 5,

        }}>
            <Button mode="contained" style={{
                width: "45%",
            }} >
                Follow
            </Button>

            <Button mode="contained-tonal" textColor='#fff' style={{
                backgroundColor: "#666",
                width: "45%",
            }} >
                Message
            </Button>

        </View>
    );
}

const styles = StyleSheet.create({})

export default InteractiveSectionOther;
