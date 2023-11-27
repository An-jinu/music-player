import { Flex } from '@/assets/style';
import { Container, AlbumImage, Name, ArtistName } from './TrackItem.style';

interface Props {
  index: number;
  track: SpotifyApi.TrackObjectFull;
}

const TrackItem = ({ index, track }: Props) => {
  const { album, name, artists } = track;

  // Album Image
  const albumImage = album.images[0].url || '';
  // Artist Name
  const artistName = artists[0].name;

  return (
    <Container>
      <Flex alignItems="center">{index}</Flex>
      <Flex gap="12px">
        <AlbumImage src={albumImage} />
        <Flex column gap="4px" justifyContent="center">
          <Name>{name}</Name>
          <ArtistName>{artistName}</ArtistName>
        </Flex>
      </Flex>
      <Flex alignItems="center">재생</Flex>
      <Flex alignItems="center">{album.name}</Flex>
      <Flex alignItems="center">시간</Flex>
    </Container>
  );
};

export default TrackItem;
