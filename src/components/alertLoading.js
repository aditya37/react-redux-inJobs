import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {Modal, View, StatusBar} from 'react-native';

const AlertLoading = (props) => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current.play();
  }, []);
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#00000040" />
      <Modal visible={props.isVisible} transparent={true} animationType={'none'}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: '#00000050',
          }}>
          <LottieView
            ref={animation}
            source={require('.././assets/loading.json')}
          />
        </View>
      </Modal>
    </View>
  );
};

export default AlertLoading;
