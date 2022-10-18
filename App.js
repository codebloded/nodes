// In App.js in a new project

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Providers from './app/navigation';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Providers />
    </GestureHandlerRootView>
  );
}

export default App;
