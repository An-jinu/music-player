import { Flex } from '@/assets/style';
import { TRANSITION_TIMING } from '@/assets/style/global';
import { SkeletonView } from '@/assets/style/Skeleton';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 260px;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.BackgroundBase};
  transition: background-color ${TRANSITION_TIMING};
  padding: 8px 12px;

  &:hover {
    background-color: ${({ theme }) => theme.BackgroundSecondary};
  }
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${TRANSITION_TIMING};
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const SkeletonThumbnail = styled(SkeletonView)`
  width: 100%;
  height: 240px;
`;

export const TextContainer = styled(Flex)`
  padding: 16px 0px;
  padding-bottom: 0;
`;

export const Up = styled.div`
  font-size: 6px;
  transition: color ${TRANSITION_TIMING};
  color: ${({ theme }) => theme.StatusNegative};
  padding: 1px 2px;
  border: 1px solid ${({ theme }) => theme.StatusNegative};
  border-radius: 2px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  transition: color ${TRANSITION_TIMING};
  color: ${({ theme }) => theme.ContentPrimary};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const SkeletonTitle = styled(SkeletonView)`
  height: 19.5px;
  width: 80%;
`;

export const Contents = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.ContentTertiary};
  line-height: 1.5;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SkeletonContents = styled(SkeletonView)`
  height: 63px;
`;
export const SkeletonAuthor = styled(SkeletonView)`
  height: 14px;
  width: 30%;
`;
export const Author = styled.div`
  font-size: 12px;
  font-weight: bold;
  transition: color ${TRANSITION_TIMING};
  color: ${({ theme }) => theme.ContentTertiary};
`;
