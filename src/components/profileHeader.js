import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {Header} from 'react-native-elements';

const ProfileHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#cc3232'}}>
      {/* Validate route type */}
      {props.isProfile === 'Profile' ? (
        <Header
          placement="left"
          containerStyle={{
            height: 75,
            backgroundColor: '#FFF',
          }}
          centerComponent={{
            text: props.title,
            style: {
              fontSize: 18,
              color: '#000000',
              alignSelf: 'center',
            },
          }}
          rightComponent={{
            icon: 'settings',
            onPress: () => {
              navigation.navigate(props.navigateSetting);
            },
          }}
        />
      ) : (
        <Header
          placement="left"
          containerStyle={{
            height: 75,
            backgroundColor: '#FFF',
          }}
          leftComponent={{
            icon: 'arrow-back',
            color: '#000000',
            size: 24,
            onPress: () => {
              navigation.goBack();
            },
          }}
          centerComponent={{
            text: props.title,
            style: {
              fontSize: 18,
              color: '#000000',
              alignSelf: 'center',
            },
          }}
          rightComponent={{
            icon: 'settings',
            onPress: () => {
              navigation.navigate(props.navigateSetting);
            },
          }}
        />
      )}
    </View>
  );
};

export default ProfileHeader;
