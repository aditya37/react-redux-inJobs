import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProfileScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d8d9',
  },
  employeHeader: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15,
    flexDirection: 'column',
    borderRadius: 4,
  },
  containerAbout: {
    flex: 1,
    flexDirection: 'row',
  },
  timelineImage: {
    width: 400,
    height: 150,
  },
  imgProfileContainer: {
    flex: 1,
    width: 400,
    position: 'absolute',
    zIndex: 1,
    marginTop: 90,
    flexDirection: 'row',
  },
  imgProfile: {
    width: 90,
    height: 90,
    borderWidth: 45,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 89,
  },
  iconEdit: {
    marginLeft: 224,
    marginTop: 10,
  },
  employeAbout: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15,
    flexDirection: 'column',
    borderRadius: 4,
  },
  employeExperience: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15,
    flexDirection: 'column',
    borderRadius: 4,
  },
  employeEducation: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15,
    flexDirection: 'column',
    borderRadius: 4,
  },
  employeContact: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15,
    flexDirection: 'column',
    borderRadius: 4,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop:4,
    marginBottom:5
  },
});

export default ProfileScreenStyle;
