import { Flex } from '@/assets/style';
import { TRANSITION_TIMING } from '@/assets/style/global';
import styled from '@emotion/styled';

export const PageContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  transition: background-color ${TRANSITION_TIMING};
  background-color: ${({ theme }) => theme.BackgroundPrimary};
`;
