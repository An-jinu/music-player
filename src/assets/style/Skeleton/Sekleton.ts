import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { TRANSITION_TIMING } from '../global';

export const SkeletonViewAnimation = keyframes`
from {
  left: -100%;
}

to {
  left: 100%;
}
`;

export const SkeletonView = styled.div`
  position: relative;
  transition: background-color ${TRANSITION_TIMING};
  background-color: ${({ theme }) => theme.BackgroundSecondary};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.BackgroundSecondary},
      ${({ theme }) => theme.BackgroundTertiary},
      ${({ theme }) => theme.BackgroundSecondary}
    );
    animation: ${SkeletonViewAnimation} 2s infinite;
  }
`;
