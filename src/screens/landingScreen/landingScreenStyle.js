import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LandingStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('10%'),
    marginBottom: hp('5%'),
  },
  imageLogo: {
    width: wp('79%'),
    height: hp('45%'),
  },

  // Button Area
  buttonLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: wp('26.8%'),
    height: hp('5.3%'),
    marginEnd:30,
    marginStart:50,
    borderRadius: 5,
    backgroundColor: '#45AA4A',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Roboto',
    justifyContent: 'center',
    marginTop: 5,
    textAlign: 'center',
  },
  buttonLoginFacebook: {
    width: wp("72.2%"),
    height:hp("5.2%"),
    marginLeft: 57,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#28ABB9',
  },
});

export default LandingStyle;
