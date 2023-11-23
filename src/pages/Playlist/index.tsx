import { Flex } from '@/assets/style';
import { useSpotifyPlaylistQuery } from '@/hook/apis/spotify/playlist/useSpotifyPlaylistQuery';
import { useColorThief } from '@/hook/useColorThief';
import React from 'react';
import { useParams } from 'react-router';
import TrackList from './components/TrackList';
import { AlbumImageContainer, Container, Description, Header, Title } from './style';

const Playlist = (): React.ReactElement => {
  const { playlistId } = useParams();
  const { data, isLoading } = useSpotifyPlaylistQuery(playlistId);
  const imageUrl = data?.images[0].url || '';

  const palette = useColorThief(imageUrl);

  return (
    <Container column gap="8px">
      {!isLoading && data && palette.length > 0 && (
        <>
          <Header alignItems="flex-end" style={{ backgroundColor: palette[0] }}>
            <Flex alignItems="center" gap="24px">
              <AlbumImageContainer>
                <img src={imageUrl} alt="" />
              </AlbumImageContainer>
              <Flex column gap="10px">
                <Title>{data.name}</Title>
                <Description>{data.description}</Description>
              </Flex>
            </Flex>
          </Header>
          <TrackList playlist={data} />
        </>
      )}
    </Container>
  );
};

export default Playlist;
