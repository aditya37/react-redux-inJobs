import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Modal,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Avatar, Icon, Input} from 'react-native-elements';
import {SwipeablePanel} from 'rn-swipeable-panel';
import {CameraComponent, CustomAlert, CustomHeader} from '../../components';
import RegisterStyle from './registerScreenStyle';
import DocumentPicker from 'react-native-document-picker';
import Snackbar from 'react-native-snackbar';
import {connect} from 'react-redux';
import {registerAction, resetItem} from '../../redux/actions/registerAction';

const RegisterScreen = (props) => {
  const [isPanelActive, setisPanelActive] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const [getData, setData] = useState({
    username: '',
    password: '',
    email: '',
    imageUri:
      'https://cdn3.vectorstock.com/i/thumb-large/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
    mimeType: 'image/jpeg',
    filename: '',
  });

  const RegisterHandler = (data) => {
    props
      .ActionRegister(data)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        Snackbar.show({
          text: err.response.data.message,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'Oke',
          },
        });
      });
  };

  const ShowFilePicker = async () => {
    try {
      const documentPicker = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setData({
        ...getData,
        imageUri: documentPicker.uri,
        mimeType: documentPicker.type,
        filename: documentPicker.name,
      });
    } catch (error) {
      // User Canclled the picker
      if (DocumentPicker.isCancel(error)) {
      }
      throw error;
    }
  };

  return (
    <View style={RegisterStyle.container}>
      <CustomHeader title="Register" screen="landing" />
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView>
        {/* Welcome text*/}
        <View style={RegisterStyle.welcomeContainer}>
          <Text style={RegisterStyle.welcomeText}>Welcome to InJobs</Text>
          <Text style={RegisterStyle.textCreateAccount}>
            Create your account
          </Text>
          <Avatar style={RegisterStyle.uploadImage} rounded>
            <Image
              source={{uri: getData.imageUri}}
              style={RegisterStyle.uploadImage}
            />
            <Avatar.Accessory
              size={30}
              onPress={() => setisPanelActive(true)}
            />
          </Avatar>
        </View>

        {/* Form Area */}
        <View style={RegisterStyle.formContainer}>
          <Input
            placeholder="Username"
            textContentType="username"
            returnKeyType="next"
            onChangeText={(val) =>
              setData({
                ...getData,
                username: val,
              })
            }
            leftIcon={<Icon name="person" size={24} />}
          />
          <Input
            placeholder="Password"
            onChangeText={(val) =>
              setData({
                ...getData,
                password: val,
              })
            }
            leftIcon={<Icon name="lock" size={24} />}
            secureTextEntry={true}
          />
          <Input
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={(val) =>
              setData({
                ...getData,
                email: val,
              })
            }
            leftIcon={<Icon name="email" size={24} />}
          />
          <TouchableOpacity
            style={RegisterStyle.button}
            onPress={() => RegisterHandler(getData)}>
            {/* Show Loading or progress */}
            {props.stateRegister.isLoading == true ? (
              <ActivityIndicator
                animating={props.stateRegister.isLoading}
                color="#ffff"
                size="small"
                style={RegisterStyle.buttonText}
              />
            ) : (
              <Text style={RegisterStyle.buttonText}>Register</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={RegisterStyle.buttonFacebook}>
            <Text style={RegisterStyle.buttonText}>Register With Facebook</Text>
          </TouchableOpacity>
        </View>
        {/* Show panel for file picker or camera */}
        <SwipeablePanel
          showCloseButton={true}
          onlySmall={true}
          style={RegisterStyle.swipePanel}
          isActive={isPanelActive}
          fullWidth={true}
          onClose={() => setisPanelActive(false)}>
          <View style={RegisterStyle.SwipeableContent}>
            <Text style={RegisterStyle.SwipeableTextHeader}>
              Select profile picture
            </Text>
            <View style={RegisterStyle.nestedTextView}>
              <Icon
                style={RegisterStyle.iconLeft}
                name="add-a-photo"
                size={30}
              />
              <TouchableOpacity>
                <Text
                  onPress={() => ShowFilePicker()}
                  style={{
                    fontSize: 19,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    marginLeft: 5,
                  }}>
                  Choose from gallery
                </Text>
              </TouchableOpacity>
            </View>
            <View style={RegisterStyle.nestedTextView}>
              <Icon style={RegisterStyle.iconLeft} name="camera" size={30} />
              <TouchableOpacity>
                <Text
                  onPress={() => setVisible(true)}
                  style={{
                    fontSize: 19,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    marginLeft: 5,
                  }}>
                  Take Picture
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SwipeablePanel>
        {/* Camera Modal */}
        <Modal visible={isVisible}>
          <CameraComponent
            HideModal={(val) => setVisible(val)}
            takePicture={(uri) => {
              if (uri != null) {
                let _filename = uri.substring(
                  uri.lastIndexOf('/') + 1,
                  uri.length,
                );
                setData({
                  ...getData,
                  filename: _filename,
                  imageUri: uri,
                });
              }
            }}></CameraComponent>
        </Modal>
        {props.stateRegister.isAlert == true ? (
          <CustomAlert
            isVisible={props.stateRegister.isAlert}
            alertTitle="Success Register"
            alertMessage={props.stateRegister.message}
            confirmText="Okay"
            button={() => props.ActionReset()}
          />
        ) : (
          <CustomAlert isVisible={props.stateRegister.isAlert} />
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    stateRegister: state.registerReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ActionRegister: (data) => dispatch(registerAction(data)),
    ActionReset: () => dispatch(resetItem()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
