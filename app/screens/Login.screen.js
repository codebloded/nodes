import React, { useContext } from 'react';
import {
    View,
    Image,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacityBase,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Platform,
} from 'react-native';
import Forminput from '../components/FormInput';
import Formbutton from '../components/FormButton';
import { useNavigation } from '@react-navigation/native';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import { ScreenHeading } from '../styles/Auth.styles';
import { Button } from 'react-native-paper';

const LoginScreen = () => {
    const navigation = useNavigation();
    const { login, googleLogin } = useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <ScrollView>
            <ScreenHeading>Sign Up</ScreenHeading>
            <SafeAreaView style={styles.container}>
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

                <TouchableOpacity style={styles.forgot}>
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
                {Platform.OS === 'android' ? (
                    <>
                        <SocialButton
                            buttonTitle="Sign in with Google"
                            btnType="google"
                            color="#d34e41"
                            backgroundColor="#f5e7ea"
                            onPress={() => {
                                googleLogin();
                            }}
                        />
                    </>
                ) : null}
                <TouchableOpacity
                    style={styles.forgot}
                    onPress={() => navigation.navigate('signup')}>
                    <Text style={styles.forgotText}>
                        Don't have an account? create here
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 60,
        padding: 20,
        paddingTop: 5,
    },

    image: {
        height: 200,
        width: 200,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
        fontWeight: '500',
        fontSize: 28,
        marginBottom: 5,
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
    forgot: {
        marginVertical: 25,
    },
    forgotText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#2e64e5',
        fontWeight: 'bold',
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
    },
});

export default LoginScreen;
