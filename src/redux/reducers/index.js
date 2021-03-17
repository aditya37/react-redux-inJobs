import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  registerReducer: registerReducer,
  loginReducer: loginReducer,
  profileReducer: profileReducer,
});
