import React, {useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashStyle from './splashScreenStyle.js';

const SplashScreen = ({navigation}) => {
  const _loginValidate = async () => {
    try {
      let _userDatas = await AsyncStorage.getItem('user_datas');
      if (_userDatas !== null) {
        navigation.replace('home');
      } else {
        navigation.replace('landing');
      }
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    setTimeout(() => {
      _loginValidate();
    }, 2000);
  });

  return (
    <View style={SplashStyle.viewContainer}>
      <StatusBar backgroundColor="#45AA4A" />
    </View>
  );
};

export default SplashScreen;
