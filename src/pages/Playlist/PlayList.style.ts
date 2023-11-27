import { Flex } from '@/assets/style';
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
