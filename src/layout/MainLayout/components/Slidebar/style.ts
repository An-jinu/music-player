import { Flex } from '@/assets/style';
import { TRANSITION_TIMING } from '@/assets/style/global';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  position: fixed;
  top: 16px;
  left: 16px;

  width: 30vh;
  height: calc(100vh - 32px);

  transition: background-color ${TRANSITION_TIMING};
  background-color: ${({ theme }) => theme.BackgroundBase};
  border-radius: 12px;
`;
