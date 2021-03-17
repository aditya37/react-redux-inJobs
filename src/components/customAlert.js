import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';

const CustomAlert = (props) => {
 
  return (
    <View style={{flex: 1}}>
      <AwesomeAlert
        show={props.isVisible}
        showProgress={false}
        title={props.alertTitle}
        message={props.alertMessage}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText={props.confirmText}
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          props.button()
        }}
      />
    </View>
  );
};

export default CustomAlert;
