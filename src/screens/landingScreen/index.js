import React from 'react';
import {View, Text, Image,TouchableOpacity,StatusBar} from 'react-native';
import LandingStyle from './landingScreenStyle.js';

const LandingScreen = ({navigation}) => {
    const movePage = (page) => {
        navigation.navigate(page)
    }
  return (
  <View style={LandingStyle.containerStyle}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={LandingStyle.logoLayout}>
          <Image style={LandingStyle.imageLogo} source={require('../../assets/logo_landing_page.png')}/>
      </View>
      <View style={LandingStyle.buttonLayout}>
          <TouchableOpacity style={LandingStyle.button} onPress={() => movePage('login')}>
              <Text style={LandingStyle.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={LandingStyle.button} onPress={() => movePage('register')}>
              <Text style={LandingStyle.buttonText}>Register</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={LandingStyle.buttonLoginFacebook}><Text style={LandingStyle.buttonText}>Login With Facebook</Text></TouchableOpacity>
  </View>
  );
};

export default LandingScreen;
