import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { windowHeight, windowWidth } from '../utils/dimenssions';

const Forminput = ({ placeholder, lableView, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <Ionicon
                name={iconType}
                style={styles.iconStyle}
                size={25}
                color="#666"
            />
            <TextInput
                style={[styles.input, { height: Platform.OS == 'android' ? 40 : 20 }]}
                placeholder={placeholder}
                placeholderTextColor="#666"
                numberOfLines={1}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#666',
        borderRadius: 25,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});

export default Forminput;
