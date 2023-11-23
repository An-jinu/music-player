import React from 'react';
import { Container, SkeletonAuthor, SkeletonTitle, SkeletonThumbnail, TextContainer } from './style';

interface Props {
  repeat?: number;
}

const Skeleton = ({ repeat = 1 }: Props): React.ReactElement => {
  return (
    <>
      {Array.from({ length: repeat }, (_, i) => (
        <Container column key={i}>
          <SkeletonThumbnail />

          <TextContainer column gap="8px">
            <SkeletonTitle />
            <SkeletonAuthor />
          </TextContainer>
        </Container>
      ))}
    </>
  );
};

export default Skeleton;
