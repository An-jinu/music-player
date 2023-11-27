import { useSpotifyPlaylistQuery } from '@/hook/apis/spotify/playlist/useSpotifyPlaylistQuery';
import React from 'react';
import { useParams } from 'react-router';
import Header from './components/Header/Header';
import TrackList from './components/TrackList/TrackList';
import { Container } from './PlayList.style';

const Playlist = (): React.ReactElement => {
  const { playlistId } = useParams();
  const { data, isLoading } = useSpotifyPlaylistQuery(playlistId);
  const imageUrl = data?.images[0].url || '';

  return (
    <Container column gap="8px">
      <>
        <Header imageUrl={imageUrl} isLoading={isLoading} name={data?.name} description={data?.description} />

        <TrackList isLoading={isLoading} playlist={data} />
      </>
    </Container>
  );
};

export default Playlist;
