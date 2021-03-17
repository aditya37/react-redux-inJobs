import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const RegisterStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginBottom:10
  },
  // Welcome text container
  welcomeContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: wp("7.5%"),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  textCreateAccount: {
    fontSize: wp("4.4%"),
    alignSelf: 'center',
  },
  uploadImage: {
    marginTop:5,
    marginBottom:10,
    alignSelf: 'center',
    height: hp("15%"),
    width: wp("26%"),
    borderRadius:100,
  },
  // Formm Container
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
    width:wp("92.5")
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
    width:wp("70.5")
  },
  // style SwipeablePanel
  swipePanel:{
    height:hp("65.4%"),
  },
  SwipeableContent: {
    flexDirection: 'column',
    marginLeft: 23
  },
  SwipeableTextHeader: {
    fontWeight: 'bold',
    fontSize: wp("5.9%"),
    marginTop: 5,
    marginBottom: 14,
  },
  nestedTextView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    width: wp("10%"),
  },
});

export default RegisterStyle;
