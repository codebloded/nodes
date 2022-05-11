import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './Auth.navigator';
import AppNavigator from './App.navigator';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = React.useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  if (initializing) {
    return null;
  }
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Routes;
