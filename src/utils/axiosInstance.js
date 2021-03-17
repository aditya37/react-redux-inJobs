import axios from 'axios';
import {BASE_URL, BASE_URL_REFRESH} from './constants';
import {UpdateItem} from './asyncStorage';
import AsyncStorage from '@react-native-community/async-storage';

var header = {};
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: header,
});

AxiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url != '/' && config.url != '/signup') {
      let asyncStorage = await AsyncStorage.getItem('user_datas');
      let _json = JSON.parse(asyncStorage);
      config.headers['Authorization'] = 'Bearer ' + _json.access_token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const RefreshToken = async () => {
  return new Promise(async (resolve, reject) => {
    let asyncStorage = await AsyncStorage.getItem('user_datas');
    let refreshToken = JSON.parse(asyncStorage);
    return axios({
      baseURL: BASE_URL_REFRESH,
      url: '/refresh',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        refresh_token: refreshToken.refresh_token,
      },
    })
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((_err) => {
        reject(_err);
      });
  });
};

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      RefreshToken()
        .then((val) => {
          let newToken = JSON.stringify({
            access_token: val.access_token,
            refresh_token: val.refresh_token,
            employe_id: val.idEmploye,
          });
          UpdateItem('user_datas', newToken);
        })
        .catch((_err) => {
          return Promise.reject(_err);
        });
    }
    return Promise.reject(error);
  },
);
export default AxiosInstance;
