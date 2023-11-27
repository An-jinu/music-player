import { Flex } from '@/assets/style';
import { SkeletonView } from '@/assets/style/Skeleton';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 16px 40% 20% 30% 10%;
  align-items: center;

  font-size: 14px;
  color: ${({ theme }) => theme.ContentPrimary};
  gap: 12px;
`;

export const AlbumImage = styled.img`
  width: 52px;
  height: 52px;
  object-fit: cover;
`;
export const Name = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.ContentPrimary};
`;

export const ArtistName = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.ContentSecondary};
`;

export const SkeletonAlbumImage = styled(SkeletonView)`
  width: 52px;
  height: 52px;
`;

export const SkeletonName = styled(SkeletonView)`
  width: 200px;
  height: 20px;
`;

export const SkeletonArtistName = styled(SkeletonView)`
  width: 100px;
  height: 18px;
`;

export const SkeletonText = styled(SkeletonView)`
  width: 50%;
  height: 20px;
`;
