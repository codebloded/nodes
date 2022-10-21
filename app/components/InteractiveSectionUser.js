import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { SettingsIcon } from '../styles/Profile.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InteractiveSectionUser = ({ settingsRef }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
            marginHorizontal: 5,

        }}>
            <Button mode="contained" style={{
                width: "80%",
            }} >
                Edit Profile
            </Button>
            <SettingsIcon>
                <Ionicons style={{ alignSelf: "center" }} name="settings-outline" size={20} color="#000" onPress={() => settingsRef.current.snapTo(0)} />
            </SettingsIcon>



        </View>
    );
}

const styles = StyleSheet.create({})

export default InteractiveSectionUser;
