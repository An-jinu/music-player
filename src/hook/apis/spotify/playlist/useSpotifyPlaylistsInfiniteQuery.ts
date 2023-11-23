import PlaylistService from '@/service/Spotify/PlaylistService';
import QueryString from 'qs';
import { useInfiniteQuery } from 'react-query';
import { CategoryKey } from '../category/useSpotifyCategoriesQuery';
import { GetPlaylistsRequest } from './useSpotifyPlaylistsQuery';

export const useSpotifyPlaylistsInfiniteQuery = (categoryId: string, query: GetPlaylistsRequest) => {
  return useInfiniteQuery(
    [`${CategoryKey}/playlists`, categoryId, query],
    ({ pageParam }) =>
      PlaylistService.getPlaylistsByCategory(categoryId, {
        ...query,
        offset: pageParam,
      }),
    {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage.data.playlists;
        if (next) {
          const { offset } = QueryString.parse(next);
          return offset;
        }
        return null;
      },
      select: ({ pageParams, pages }) => {
        return {
          pages: pages.map((page) => page.data),
          pageParams,
        };
      },
    }
  );
};
