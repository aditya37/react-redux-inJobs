import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const LoginScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  // Welcome text container
  welcomeContainer: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  textMotto: {
    fontSize: 15,
    alignSelf: 'center',
  },
  // Form Container
  formContainer: {
    flexDirection: 'column',
    marginLeft: 4,
    marginRight: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#45AA4A',
    borderRadius: 5,
    alignSelf: 'center',
    height: 34,
    // width: 393,
    width: wp('92.5'),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Roboto',
    marginTop: 6,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonFacebook: {
    marginTop: 20,
    backgroundColor: '#28ABB9',
    borderRadius: 5,
    alignSelf: 'center',
    height: 34,
    // width: 393,
    width: wp('70.5'),
  },
});

export default LoginScreenStyle;
