/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from './src/utils/alertHelper.js';
import React from 'react';

const App: () => React$Node = () => {
  if (__DEV__) {
    import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
