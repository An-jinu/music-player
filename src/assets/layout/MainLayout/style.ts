import { Flex } from '@/assets/style';
import { TRANSITION_TIMING } from '@/assets/style/global';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 100%;
  min-height: 100%;
  padding: 16px;
  transition: background-color ${TRANSITION_TIMING};
  background-color: ${({ theme }) => theme.BackgroundPrimary};
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: calc(30vh + 16px);
`;
