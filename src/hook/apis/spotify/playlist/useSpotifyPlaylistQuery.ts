import PlaylistService from '@/service/Spotify/PlaylistService';
import { useQuery } from 'react-query';

export const PlaylistKey = '/playlists';

export const useSpotifyPlaylistQuery = (playlistId: string | undefined) => {
  return useQuery([`${PlaylistKey}/${playlistId}`], () => PlaylistService.getPlaylistsById(playlistId || ''), {
    select: ({ data }) => {
      return data;
    },
    enabled: !!playlistId,
  });
};
