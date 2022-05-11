import React, {useContext} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacityBase,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import Forminput from '../components/FormInput';
import Formbutton from '../components/FormButton';
import {useNavigation} from '@react-navigation/native';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = () => {
  const {register} = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image style={styles.logo} source={require('../assets/lb.png')} />
          <Text style={styles.text}>Create An Account</Text>
          <Forminput
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            lableView={email}
            keyboardType="email-address"
            iconType="user"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Forminput
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            lableView={password}
            iconType="lock"
            secureTextEntry={true}
          />
          <Forminput
            onChangeText={text => setConfirmPassword(text)}
            placeholder="Confirm Password"
            lableView={confirmPassword}
            iconType="lock"
            secureTextEntry={true}
          />
          <Formbutton
            buttonTitle="Sign In"
            onPress={() => {
              if (password === confirmPassword) {
                register(email, password);
              } else {
                alert("Password doesn't match");
              }
            }}
          />
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By registering, you confirm that you accept our{' '}
            </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
              <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Terms of service
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Privacy Policy
            </Text>
          </View>

          <SocialButton
            buttonTitle="Sign in with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
          />
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 5,
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
    fontSize: 18,
    color: '#2e64e5',
    fontWeight: '500',
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
  },
});

export default SignupScreen;
