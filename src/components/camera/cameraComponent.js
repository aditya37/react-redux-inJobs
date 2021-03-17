import React, {PureComponent} from 'react';
import {Image, FlatList, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {Icon} from 'react-native-elements';
import CameraLoading from './cameraLoading.js';
import CameraStyle from './cameraStyle.js';

class CameraComponent extends PureComponent {
  state = {
    isTorch: RNCamera.Constants.FlashMode.off,
    cameraType: RNCamera.Constants.Type.back,
  };
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.HideModal = this.HideModal.bind(this);
  }

  // Create props with callback
  async takePicture(camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    this.props.takePicture(data.uri);
  }
  // Props For HideModal or close camera
  HideModal() {
    this.props.HideModal('false');
  }
  // function toggle Flash/torch
  ToggleTorch() {
    // Store State value
    let isTorch = this.state.isTorch;
    if (isTorch == RNCamera.Constants.FlashMode.off) {
      isTorch = RNCamera.Constants.FlashMode.torch;
    } else {
      isTorch = RNCamera.Constants.FlashMode.off;
    }
    this.setState({isTorch: isTorch});
  }
  isFront() {
    let isFront = this.state.cameraType;
    if (isFront == RNCamera.Constants.Type.back) {
      isFront = RNCamera.Constants.Type.front;
    } else {
      isFront = RNCamera.Constants.Type.back;
    }
    this.setState({cameraType: isFront});
  }
  
  render() {
    return (
      <View style={CameraStyle.container}>
        <RNCamera
          type={this.state.cameraType}
          flashMode={this.state.isTorch}
          style={CameraStyle.styleRNCamera}>
          {({camera, status}) => {
            if (status !== 'READY') return <CameraLoading></CameraLoading>;
            return (
              // Parent style for close button and other start
              <View style={{flex: 1}}>
                {/* Close Button Start */}
                <View style={{alignSelf: 'flex-end'}}>
                  <TouchableOpacity
                    style={{marginRight: 13, marginTop: 10}}
                    onPress={() => this.HideModal()}>
                    <Icon
                      size={32}
                      backgroundColor="transparent"
                      color="white"
                      name="close"
                      style={{opacity: 0.8}}
                    />
                  </TouchableOpacity>
                </View>
                {/* Close Button End */}
                {/* Take Picture and select image area  Start */}
                <View style={CameraStyle.containerAction}>
                  {/* Action Button start */}
                  <View style={CameraStyle.camerAction}>
                    <TouchableOpacity onPress={() => this.ToggleTorch()}>
                      {/* Logic For switch torch or flash */}
                      {this.state.isTorch ==
                      RNCamera.Constants.FlashMode.off ? (
                        <Icon
                          style={{marginTop: 30}}
                          name="flash-off"
                          color="#ebe2e1"
                          type="material"
                          size={32}
                        />
                      ) : (
                        <Icon
                          style={{marginTop: 30}}
                          name="flash-on"
                          color="#ebe2e1"
                          type="material"
                          size={32}
                        />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={CameraStyle.buttonCircle}
                      onPress={() => this.takePicture(camera)}
                    />
                    <TouchableOpacity onPress={() => this.isFront()}>
                      {this.state.cameraType == RNCamera.Constants.Type.back ? (
                        <Icon
                          style={{marginTop: 30}}
                          name="camera-front"
                          color="#ebe2e1"
                          type="material"
                          size={32}
                        />
                      ) : (
                        <Icon
                          style={{marginTop: 30}}
                          name="switch-camera"
                          color="#ebe2e1"
                          type="material"
                          size={32}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  {/* Action Button End */}
                </View>
                {/* Take Picture and select image area End */}
              </View>
              // Parent style for close button and other start
            );
          }}
        </RNCamera>
      </View>
    );
  }
}

export default CameraComponent;
