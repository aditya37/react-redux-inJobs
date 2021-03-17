import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';

const CameraLoading = () => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current.play();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#45AA4A',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        ref={animation}
        source={require('../../assets/9948-camera-pop-up.json')}
      />
    </View>
  );
};
export default CameraLoading;
