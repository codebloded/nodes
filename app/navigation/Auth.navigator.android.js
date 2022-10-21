import * as React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login.screen';
import OnboardingScreen from '../screens/Onboarding.screen';
import AsyncStorage from '@react-native-community/async-storage';
import SignupScreen from '../screens/Signup.screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GoogleSignin } from '@react-native-community/google-signin';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  const [isOnboarding, setIsOnboarding] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('alreadyOnboarded').then(value => {
      if (value !== null) {
        AsyncStorage.setItem('alreadyOnboarded', 'true');
        setIsOnboarding(true);
      } else {
        setIsOnboarding(false);
      }
    });

    GoogleSignin.configure({
      webClientId:
        '997961915518-42jiauj1irv37u9nu2i5kphu0g4tp1e5.apps.googleusercontent.com',
    });
  }, []);

  return (
    <>
      <StatusBar />
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    // backgroundColor: '#a3a5a8',
                    borderRadius: 50,
                    padding: 8,
                    opacity: 0.9,
                  }}>
                  <Ionicons name="chevron-back-sharp" size={26} color="#000" />
                </TouchableOpacity>
              );
            },
          })}
        />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigator;
