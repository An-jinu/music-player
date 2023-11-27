import { Flex } from '@/assets/style';
import { Container, SkeletonAlbumImage, SkeletonArtistName, SkeletonName, SkeletonText } from './TrackItem.style';

interface Props {
  repeat?: number;
}

const SkeletonTrackItem = ({ repeat = 1 }: Props) => {
  return (
    <>
      {Array.from({ length: repeat }, (_, i) => (
        <Container key={i}>
          <Flex alignItems="center" />
          <Flex gap="12px">
            <SkeletonAlbumImage />
            <Flex column gap="4px" justifyContent="center">
              <SkeletonName />
              <SkeletonArtistName />
            </Flex>
          </Flex>
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
        </Container>
      ))}
    </>
  );
};

export default SkeletonTrackItem;
