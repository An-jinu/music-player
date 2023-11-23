import { css } from '@emotion/react';

// Font

import PretendardThin from '@/assets/fonts/Pretendard-Thin.otf';
import PretendardExtraLight from '@/assets/fonts/Pretendard-ExtraLight.otf';
import PretendardLight from '@/assets/fonts/Pretendard-Light.otf';
import PretendardRegular from '@/assets/fonts/Pretendard-Regular.otf';
import PretendardMedium from '@/assets/fonts/Pretendard-Medium.otf';
import PretendardSemiBold from '@/assets/fonts/Pretendard-SemiBold.otf';
import PretendardBold from '@/assets/fonts/Pretendard-Bold.otf';
import PretendardExtraBold from '@/assets/fonts/Pretendard-ExtraBold.otf';
import PretendardBlack from '@/assets/fonts/Pretendard-Black.otf';

export const DESKTOP_CONTAINER = 1400;

export const TRANSITION_TIMING = '0.2s ease-in 0s';

export const defaultStyle = css`
  @font-face {
    font-family: Pretendard;
    font-weight: 100;
    src: url(${PretendardThin}) format('otf');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 200;
    src: url(${PretendardExtraLight}) format('otf');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 300;
    src: url(${PretendardLight}) format('otf');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 400;
    src: url(${PretendardRegular}) format('otf');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 500;
    src: url(${PretendardMedium}) format('otf');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 600;
    src: url(${PretendardSemiBold}) format('otf');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: bold;
    src: url(${PretendardBold}) format('otf');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 800;
    src: url(${PretendardExtraBold}) format('otf');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 900;
    src: url(${PretendardBlack}) format('otf');
  }

  * {
    font-family: Pretendard;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }
`;
