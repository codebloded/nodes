import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Formbutton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.conatainer}>
      <Text>Home Screen</Text>
      <Formbutton
        buttonTitle="Logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
