import { Flex } from '@/assets/style';
import { TRANSITION_TIMING } from '@/assets/style/global';
import styled from '@emotion/styled';

export const LoginPage = styled(Flex)`
  width: 100%;
  height: 100vh;
  transition: background-color ${TRANSITION_TIMING};
  background-color: ${({ theme }) => theme.BackgroundPrimary};
`;

export const Container = styled(Flex)`
  width: 480px; // 임시 값, 차후 반응형 기획 정해질시 변경 필요
  padding: 128px 0px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.ContentPrimary};
`;

export const Text = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.ContentSecondary};
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.ContentDisabled};
`;
