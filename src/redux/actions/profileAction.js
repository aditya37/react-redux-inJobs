import AxiosInstance from '../../utils/axiosInstance';
import {
  EMPLOYE_PROFILE,
  EMPLOYE_PROFILE_SUCCESS,
  EMPLOYE_PROFILE_FAILED,
} from '../../utils/actionType';

export const GetProfile = (uuid) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({type: EMPLOYE_PROFILE});

    AxiosInstance({
      method: 'GET',
      url: '/' + uuid,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        dispatch({
          type: EMPLOYE_PROFILE_SUCCESS,
          payload: res.data.result[0],
        });
        resolve(res);
      })
      .catch((err) => {
        if (err.response != null) {
          dispatch({
            type: EMPLOYE_PROFILE_FAILED,
            message: err.response.data.message,
          });
        }

        dispatch({
          type: EMPLOYE_PROFILE_FAILED,
          message: 'Oops!!',
        });
        reject(err);
      });
  });
};
