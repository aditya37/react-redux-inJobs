import {StyleSheet} from 'react-native';

const CameraStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleRNCamera: {
    flex: 1,
    flexDirection: 'column',
  },
  containerAction: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    flexDirection: 'column',
  },
  camerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:25,
    marginRight:25,
    marginTop: 10,
  },
  buttonCircle: {
    width: 85,
    height: 85,
    borderRadius: 100,
    borderColor: '#ebe2e1',
    borderWidth: 3,
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
});
export default CameraStyle;
