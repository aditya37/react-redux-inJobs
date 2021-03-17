import {
  EMPLOYE_LOGIN,
  EMPLOYE_LOGIN_SUCCESS,
  EMPLOYE_LOGIN_FAILED,
  EMPLOYE_LOGIN_RESET_ITEM
} from '../../utils/actionType';
import AxiosInstance from '../../utils/axiosInstance';

export const ActionReset = () => (dispatch) => {
  dispatch({type:EMPLOYE_LOGIN_RESET_ITEM})
};

export const LoginAction = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({type: EMPLOYE_LOGIN});
    const jsonData = JSON.stringify({
      username: username,
      password: password,
    });

    return AxiosInstance({
      method: 'POST',
      url: '/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: jsonData,
    })
      .then((res) => {
        dispatch({
          type: EMPLOYE_LOGIN_SUCCESS,
          payload: {
            data: res.data.result,
            message: res.data.message,
          },
        });
        resolve(res);
      })
      .catch((err) => {
        if (err.response.data != null) {
          dispatch({
            type: EMPLOYE_LOGIN_FAILED,
            payload: {
              message: err.response.data.message,
            },
          });
        }
        reject(err);
      });
  });
};
