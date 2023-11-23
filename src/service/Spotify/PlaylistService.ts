import { GetPlaylistsRequest } from '@/hook/apis/spotify/playlist/useSpotifyPlaylistsQuery';
import { ApiResponse } from '@/model/Service.model';
import { AxiosRequestConfig } from 'axios';
import axiosInstance from '../config/instanceConfig';
import { createRequestURL } from '../config/requestConfig';
import { categoryURL } from './CategoryService';

const playlistURL = createRequestURL(`${import.meta.env.VITE_SPOTIFY_API_URL}/playlists`);
/**
 * 플레이리스트 목록 조회
 */
const getPlaylistsByCategory = (categoryId: string, query: GetPlaylistsRequest): ApiResponse<SpotifyApi.CategoryPlaylistsResponse> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: categoryURL(`/${categoryId}/playlists`, query),
  };

  return axiosInstance.request(config);
};

/**
 * 플레이리스트 조회
 */
const getPlaylistsById = (playlistId: string): ApiResponse<SpotifyApi.PlaylistObjectFull> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: playlistURL(`/${playlistId}`),
  };

  return axiosInstance.request(config);
};

export default {
  getPlaylistsByCategory,
  getPlaylistsById,
};
