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
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import Forminput from '../components/FormInput';
import Formbutton from '../components/FormButton';
import {useNavigation} from '@react-navigation/native';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {login, googleLogin} = useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/lb.png')} />
        <Text style={styles.text}>NODES</Text>
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
        <Formbutton
          buttonTitle="Sign In"
          onPress={() => {
            login(email, password);
          }}
        />
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
        {Platform.OS === 'android' ? (
          <>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    marginVertical: 35,
  },
  forgotText: {
    fontSize: 18,
    color: '#2e64e5',
    fontWeight: 'normal',
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
  },
});

export default LoginScreen;
