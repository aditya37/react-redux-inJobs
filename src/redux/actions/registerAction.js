import AxiosInstance from '../../utils/axiosInstance';
import {
  EMPLOYE_REGISTER,
  EMPLOYE_REGISTER_SUCCESS,
  EMPLOYE_REGISTER_FAILED,
  EMPLOYE_REGISTER_RESET_ITEM,
} from '../../utils/actionType';

export const resetItem = () => (dispatch) => {
  return dispatch({type: EMPLOYE_REGISTER_RESET_ITEM});
};

export const registerAction = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({type: EMPLOYE_REGISTER});
    // Form Data
    var formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('email', data.email);
    formData.append('photo_profile', {
      uri: data.imageUri,
      type: data.mimeType,
      name: data.filename,
    });

    // handle upload
    AxiosInstance({
      method: 'POST',
      url: '/signup',
      headers: {
        'content-Type': 'multipart/form-data',
      },
      data: formData,
    })
      .then((res) => {
        // dispatching EMPLOYE_REGISTER_SUCCESS
        dispatch({
          type: EMPLOYE_REGISTER_SUCCESS,
          payload: {
            isAlert: true,
            message: res.data.message,
          },
        });
        // Callback response
        resolve(res);
      })
      .catch((err) => {
        if (err.response != null) {
          // dispatching EMPLOYE_REGISTER_FAILED
          dispatch({
            type: EMPLOYE_REGISTER_FAILED,
            payload: {
              message: err.response.data.message,
            },
          });
        }
        // Callback error
        reject(err);
      });
  });
};
