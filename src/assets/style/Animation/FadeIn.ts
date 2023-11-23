import { keyframes } from '@emotion/react';
import { CSSProperties } from 'react';

export const FadeIn = {
  DEFAULT: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
  TOP: keyframes`
    from { opacity: 0; transform: translateY(-10px) }
    to { opacity: 1; transform: translateY(0px) }
  `,
  RIGHT: keyframes`
    from { opacity: 0; transform: translateX(10px) }
    to { opacity: 1; transform: translateX(0px) }
  `,
  BOTTOM: keyframes`
    from { opacity: 0; transform: translateY(10px) }
    to { opacity: 1; transform: translateY(0px) }
  `,
  LEFT: keyframes`
    from { opacity: 0; transform: translateX(-10px) }
    to { opacity: 1; transform: translateX(0px) }
  `,
};

export type FadeInType = keyof typeof FadeIn;

const BaseFadeInStyle: CSSProperties = {
  opacity: 0,
};

export const FadeInAnimation = (type: FadeInType, millisecond?: number): CSSProperties => {
  return {
    ...BaseFadeInStyle,
    animation: `${FadeIn[type]} ${millisecond || 300}ms forwards`,
  };
};
