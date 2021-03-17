import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Input, Icon} from 'react-native-elements';
import Snackbar from 'react-native-snackbar';
import {connect} from 'react-redux';
import {CustomAlert, CustomHeader} from '../../components';
import {ActionReset, LoginAction} from '../../redux/actions/loginAction';
import LoginScreenStyle from './loginScreenStyle';

const LoginScreen = (props) => {
  const [getData, setData] = useState({
    username: '',
    password: '',
  });

  const DoLogin = (username, password) => {
    props
      .ActionLogin(username, password)
      .then((val) => {})
      .catch((err) => {
        console.log(err)
        Snackbar.show({
          duration: Snackbar.LENGTH_LONG,
          text: err.response.data.message,
          action: {
            text: 'oke',
          },
        });
      });
  };

  return (
    <View style={LoginScreenStyle.container}>
      <CustomHeader title="Login" screen="landing" />
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      {/* Welcome Text */}
      <View style={LoginScreenStyle.welcomeContainer}>
        <Text style={LoginScreenStyle.welcomeText}>Welcome back to inJobs</Text>
        <Text style={LoginScreenStyle.textMotto}>
          Don't be lazy lion, run!!
        </Text>
      </View>
      {/* Form */}
      <View style={LoginScreenStyle.formContainer}>
        <Input
          placeholder="Username"
          textContentType="username"
          returnKeyType="next"
          onChangeText={(val) =>
            setData({
              username: val,
            })
          }
          leftIcon={<Icon name="person" size={24} />}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(val) =>
            setData({
              ...getData,
              password: val,
            })
          }
          leftIcon={<Icon name="lock" size={24} />}
        />
        <TouchableOpacity
          style={LoginScreenStyle.button}
          onPress={() => DoLogin(getData.username, getData.password)}>
          {props.LoginState.isLoading == true ? (
            <ActivityIndicator
              animating={props.LoginState.isLoading}
              color="#ffff"
              size="small"
              style={LoginScreenStyle.buttonText}
            />
          ) : (
            <Text style={LoginScreenStyle.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={LoginScreenStyle.buttonFacebook}>
          <Text style={LoginScreenStyle.buttonText}>Login With Facebook</Text>
        </TouchableOpacity>
      </View>
      {props.LoginState.isAlert == true ? (
        <CustomAlert
          isVisible={props.LoginState.isAlert}
          alertTitle="Login Success"
          confirmText="Okey"
          alertMessage={props.LoginState.message}
          button={() => {
            props.ActionReset();
            props.navigation.replace('home');
          }}
        />
      ) : (
        <CustomAlert isVisible={props.LoginState.isAlert} />
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    LoginState: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ActionLogin: (username, password) =>
      dispatch(LoginAction(username, password)),
    ActionReset: () => dispatch(ActionReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
