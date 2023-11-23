import { Flex } from '@/assets/style';
import { TRANSITION_TIMING } from '@/assets/style/global';
import styled from '@emotion/styled';
import { IconProps } from './model';

export const Container = styled(Flex)`
  position: absolute;

  left: 16px;
  bottom: 16px;

  border-radius: 50%;
  padding: 8px;

  cursor: pointer;
  transition: background-color ${TRANSITION_TIMING};
  &:hover {
    background-color: ${({ theme }) => theme.BackgroundTertiary};
  }
`;

export const Icon = styled.div<IconProps>`
  width: 30px;
  height: 30px;
  position: relative;

  & > svg {
    position: absolute;
    transition: transform 0.5s ease-out !important;
    &.sun {
      transform: scale(${({ isLight }) => (isLight ? 1 : 0)}) rotate(${({ isLight }) => (isLight ? '360deg' : 0)});
    }
    &.moon {
      transform: scale(${({ isLight }) => (!isLight ? 1 : 0)}) rotate(${({ isLight }) => (!isLight ? '360deg' : 0)});
    }

    path {
      fill: ${({ theme }) => theme.ContentPrimary};
    }
  }
`;
