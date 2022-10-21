import React, { useContext } from 'react';
import {
    View,
    Image,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacityBase,
    TouchableOpacity,
    Platform,
    StatusBar,
    ScrollView,
} from 'react-native';
import Forminput from '../components/FormInput';
import Formbutton from '../components/FormButton';
import { useNavigation } from '@react-navigation/native';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider.android';
import { ScreenHeading } from '../styles/Auth.styles';
import { TextInput, Button } from 'react-native-paper';
import { windowHeight } from '../utils/dimenssions';

const SignupScreen = () => {
    const { register } = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    return (
        <>
            <ScrollView>
                <ScreenHeading>Sign Up</ScreenHeading>
                <SafeAreaView style={styles.container}>
                    <Forminput
                        onChangeText={text => setEmail(text)}
                        placeholder="Full Name"
                        lableView={email}
                        keyboardType="email-address"
                        iconType="ios-people"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Forminput
                        onChangeText={text => setEmail(text)}
                        placeholder="Email"
                        lableView={email}
                        keyboardType="email-address"
                        iconType="ios-mail"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Forminput
                        onChangeText={text => setPassword(text)}
                        placeholder="Password"
                        lableView={password}
                        iconType="ios-key"
                        secureTextEntry={true}
                    />

                    <Button style={{
                        padding: 5,
                        marginTop: 10,
                        borderRadius: 25,
                    }}
                        mode="contained-tonal" buttonColor='black' textColor='#fafafa' onPress={() => console.log('Pressed')}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </Button>

                    <Text style={{
                        marginVertical: 30,
                        textAlign: 'center',
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 17,

                    }} >OR</Text>

                    <SocialButton
                        buttonTitle="Sign in with Google"
                        btnType="google"
                        color="#d34e41"
                        backgroundColor="#f5e7ea"
                    />
                    <TouchableOpacity
                        style={styles.forgot}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.forgotText}>Have an Account? Sign In</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 60,
        padding: 20,
        paddingTop: 5,
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
    },
    logo: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
        fontWeight: '500',
        fontSize: 25,
        marginVertical: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 15,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
    forgot: {
        marginVertical: 15,
    },
    forgotText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2e64e5',
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
    },
});

export default SignupScreen;
