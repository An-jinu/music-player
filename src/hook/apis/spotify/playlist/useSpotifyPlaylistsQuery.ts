import PlaylistService from '@/service/Spotify/PlaylistService';
import { useQuery } from 'react-query';
import { CategoryKey } from '../category/useSpotifyCategoriesQuery';

export interface GetPlaylistsRequest {
  country?: string;
  locale?: string;
  limit?: number;
  offset?: number;
}

export const useSpotifyPlaylistsQuery = (categoryId: string, query: GetPlaylistsRequest) => {
  return useQuery([`${CategoryKey}/playlists`, categoryId, query], () => PlaylistService.getPlaylistsByCategory(categoryId, query), {
    select: ({ data }) => {
      return data;
    },
  });
};
