import React from 'react';
import { Container, TrackHeader, TrackItem } from './style';

interface Props {
  playlist: SpotifyApi.PlaylistObjectFull;
}

const TrackList = ({ playlist }: Props): React.ReactElement => {
  return (
    <Container column gap="12px">
      <TrackHeader>
        <div>#</div>
        <div>제목</div>
        <div>재생</div>
        <div>앨범</div>
        <div>시간</div>
      </TrackHeader>
      {playlist.tracks.items.map((playlistTrack, index) => {
        const { track } = playlistTrack;
        return (
          track && (
            <TrackItem key={track.id}>
              <div>{index + 1}</div>
              <div>{track.name}</div>
              <div>재생</div>
              <div>앨범</div>
              <div>시간</div>
            </TrackItem>
          )
        );
      })}
    </Container>
  );
};

export default TrackList;
