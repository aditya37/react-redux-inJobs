// Import Action type
import {
  EMPLOYE_REGISTER,
  EMPLOYE_REGISTER_SUCCESS,
  EMPLOYE_REGISTER_FAILED,
  EMPLOYE_REGISTER_RESET_ITEM,
} from '../../utils/actionType';

// Init Reducer
const initReducer = {
  message: '',
  isLoading: false,
  isAlert: false,
};

export default (state = initReducer, action) => {
  switch (action.type) {
    case EMPLOYE_REGISTER:
      return {
        isLoading: true,
      };
    case EMPLOYE_REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isAlert: true,
      };
    case EMPLOYE_REGISTER_FAILED:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isAlert: false,
      };
    case EMPLOYE_REGISTER_RESET_ITEM:
      return {
        ...state,
        isLoading: false,
        isAlert: false,
      };
    default:
      return state;
  }
};
