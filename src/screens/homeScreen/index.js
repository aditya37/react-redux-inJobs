import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const HomeScreen = ({navigation}) => {
  useEffect(() => {}, []);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <TouchableOpacity
        style={{marginTop: 100}}
        onPress={() => navigation.replace('splash')}>
        <Text> prop </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
