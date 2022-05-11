import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#007CFF',
          image: (
            <Image source={require('../assets/on1.png')} style={styles.image} />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#2658F9',
          image: (
            <Image source={require('../assets/on2.png')} style={styles.image} />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#F9A826',
          image: (
            <Image source={require('../assets/on3.png')} style={styles.image} />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#6C63FF',
          image: (
            <Image source={require('../assets/on4.png')} style={styles.image} />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
  },
  container: {
    marginTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default OnboardingScreen;
