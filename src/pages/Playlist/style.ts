import { Color, Flex } from '@/assets/style';
import { TRANSITION_TIMING } from '@/assets/style/global';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  transition: background-color ${TRANSITION_TIMING};
  background-color: ${({ theme }) => theme.BackgroundBase};
`;

export const Header = styled(Flex)`
  width: 100%;
  height: 30vh;
  padding: 24px;
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
