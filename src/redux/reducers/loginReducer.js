import {
  EMPLOYE_LOGIN,
  EMPLOYE_LOGIN_FAILED,
  EMPLOYE_LOGIN_SUCCESS,
  EMPLOYE_LOGIN_RESET_ITEM,
} from '../../utils/actionType';

const initState = {
  message: '',
  isLoading: false,
  isAlert: false,
  data: null,
};
export default (state = initState, action) => {
  switch (action.type) {
    case EMPLOYE_LOGIN:
      return {
        ...state,
        data: null,
        isLoading: true,
        isAlert: false,
      };
    case EMPLOYE_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAlert: true,
        message: action.payload.message,
        data: action.payload.data,
      };
    case EMPLOYE_LOGIN_FAILED:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        data: null,
      };
    case EMPLOYE_LOGIN_RESET_ITEM:
      return {
        ...state,
        isAlert: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
