import { ApiResponse } from '@/model/Service.model';
import { Token } from '@/model/Spotify/Token.model';
import axios, { AxiosRequestConfig } from 'axios';
import { Buffer } from 'buffer';
import { createRequestURL } from '../config/requestConfig';

const url = createRequestURL(`${import.meta.env.VITE_SPOTIFY_ACCOUNT_URL}/token`);

/**
 * 토큰 생성
 */
const postClientCredentialsToken = (): ApiResponse<Token> => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: url(''),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`).toString('base64'),
    },
    data: {
      grant_type: 'client_credentials',
    },
  };

  return axios.request(config);
};

export default {
  postClientCredentialsToken,
};
