import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from '../utils/alertHelper';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  LandingScreen,
  RegisterScreen,
  LoginScreen,
  AddExperienceScreen
} from '../screens';
import BottomStack from './bottomStack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <View style={{flex: 1}}>
      {/* Death Code => Suatu saat bisa digunakan */}
      {/* <DropdownAlert
        inactiveStatusBarStyle="dark-content"
        ref={(ref) => AlertHelper.setDropDown(ref)}
        onClose={() => AlertHelper.invokeOnClose()}
      /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer independent="true">
            <Stack.Navigator>
              <Stack.Screen
                name="splash"
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="landing"
                component={LandingScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="register"
                component={RegisterScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="home"
                component={BottomStack}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="addExperience"
                component={AddExperienceScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </View>
  );
};
export default Router;
