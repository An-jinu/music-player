import { Flex } from '@/assets/style';
import React from 'react';
import SkeletonTrackItem from './components/TrackItem/SkeletonTrackItem';
import TrackItem from './components/TrackItem/TrackItem';
import { Container, TrackHeader } from './TrackList.style';

interface Props {
  isLoading: boolean;
  playlist?: SpotifyApi.PlaylistObjectFull;
}

const TrackList = ({ isLoading, playlist }: Props): React.ReactElement => {
  return (
    <Container column gap="12px">
      <TrackHeader>
        <div>#</div>
        <div>제목</div>
        <div>재생</div>
        <div>앨범</div>
        <div>시간</div>
      </TrackHeader>
      <Flex column gap="20px">
        {isLoading ? (
          <SkeletonTrackItem repeat={50} />
        ) : (
          playlist?.tracks.items.map((playlistTrack, index) => {
            const { track } = playlistTrack;
            return track && <TrackItem index={index + 1} track={track} />;
          })
        )}
      </Flex>
    </Container>
  );
};

export default TrackList;
