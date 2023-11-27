import { Color, Flex } from '@/assets/style';
import { SkeletonView } from '@/assets/style/Skeleton';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 100%;
  height: 30vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.BackgroundBase};
  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%);
`;

export const AlbumImageContainer = styled.div`
  width: 240px;
  height: 240px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: 900;
  color: ${Color.White};
`;

export const Description = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${Color.Gray300};
`;

export const SkeletonImage = styled(SkeletonView)`
  width: 240px;
  height: 240px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

export const SkeletonTitle = styled(SkeletonView)`
  width: 50vh;
  height: 96px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

export const SkeletonDescription = styled(SkeletonView)`
  width: 40vh;
  height: 16px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
`;
