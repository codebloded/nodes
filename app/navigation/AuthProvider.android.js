import React, {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  };
  const googleLogin = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  };
  const logout = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (err) {
      console.log(err);
    }
  };
  const [user, setUser] = React.useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        googleLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
