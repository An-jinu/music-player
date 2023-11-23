import { GetCategoriesRequest } from '@/hook/apis/spotify/category/useSpotifyCategoriesQuery';
import { ApiResponse } from '@/model/Service.model';
import { AxiosRequestConfig } from 'axios';
import axiosInstance from '../config/instanceConfig';
import { createRequestURL } from '../config/requestConfig';

export const categoryURL = createRequestURL(`${import.meta.env.VITE_SPOTIFY_API_URL}/browse/categories`);

/**
 * 카테고리 목록 조회
 */
const getCategories = (query: GetCategoriesRequest): ApiResponse<SpotifyApi.MultipleCategoriesResponse> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: categoryURL('', query),
  };

  return axiosInstance.request(config);
};

export default {
  getCategories,
};
