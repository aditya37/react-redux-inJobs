import {EMPLOYE_LOGIN_SUCCESS} from '../../utils/actionType';
import {StoreData} from '../../utils/asyncStorage';
import AxiosInstance from '../../utils/axiosInstance';

const AuthMiddleware = (store) => (next) => (action) => {
  if (action.type === EMPLOYE_LOGIN_SUCCESS) {
    if (action.payload.data.access_token != null) {
      const user_datas = {
        employe_id: action.payload.data.idEmploye,
        refresh_token: action.payload.data.refresh_token,
        access_token: action.payload.data.access_token,
      };
      const SaveToJson = JSON.stringify(user_datas);
      StoreData('user_datas', SaveToJson);
    }
  }
  next(action);
};
export default AuthMiddleware;
