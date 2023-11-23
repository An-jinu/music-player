import { Flex } from '@/assets/style';
import styled from '@emotion/styled';

export const SocialContainer = styled(Flex)`
  position: relative;
  width: 100%;
  padding: 0px 24px;
  height: 48px;
  border-radius: 4px;
  cursor: pointer;

  border: 1px solid ${({ theme }) => theme.BorderDefault};

  font-size: 14px;
  color: ${({ theme }) => theme.ContentPrimary};
  font-weight: 500;

  & > svg {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
  }
`;
