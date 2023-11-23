import { Flex } from '@/assets/style';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  padding: 12px 32px;
`;

export const TrackHeader = styled.div`
  display: grid;
  grid-template-columns: 16px 40% 20% 30% 10%;

  font-size: 14px;
  color: ${({ theme }) => theme.ContentSecondary};
  gap: 12px;
`;

export const TrackItem = styled.div`
  display: grid;
  grid-template-columns: 16px 40% 20% 30% 10%;

  font-size: 14px;
  color: ${({ theme }) => theme.ContentSecondary};
  gap: 12px;
`;
