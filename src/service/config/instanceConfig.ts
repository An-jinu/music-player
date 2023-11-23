import axios, { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router';
import TokenService from '../Spotify/TokenService';

const DEFAULT_ACCEPT_TYPE = 'application/json';

const axiosInstance = axios.create();
axiosInstance.defaults.headers['Content-Type'] = DEFAULT_ACCEPT_TYPE;

axiosInstance.interceptors.request.use(async (config) => {
  config.timeout = config.timeout === undefined ? 60000 : config.timeout;

  try {
    const accessToken = localStorage.getItem('accessToken');
    // accessToken있으면 그대로 사용
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    }

    // accessToken과 refresh_token 둘 다 없으면 client credential 방식의 accessToken 발급
    const { data } = await TokenService.postClientCredentialsToken();
    config.headers['Authorization'] = `Bearer ${data.access_token}`;
    localStorage.setItem('accessToken', data.access_token);
  } catch (error) {
    return config;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error: AxiosError<ErrorResponse>) => {
    const { config, response } = error;

    // 토큰 만료 되었을 때
    if (response?.status === 401) {
      localStorage.removeItem('accessToken');
      const originRequest = config;
      //리프레시 토큰 api
      const { data, status } = await TokenService.postClientCredentialsToken();
      //리프레시 토큰 요청이 성공할 때

      if (status === 200 && originRequest) {
        const { access_token } = data;
        localStorage.setItem('accessToken', access_token);
        //진행중이던 요청 이어서하기
        config.headers['Authorization'] = `Bearer ${access_token}`;
        return axiosInstance(originRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
