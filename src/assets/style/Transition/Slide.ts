import { css, SerializedStyles } from '@emotion/react';

export const SlideTopCSSTransition = (millisecond = 500, distance = 50): SerializedStyles => css`
  transform: translateY(-${distance}px);

  &.slide-top-enter,
  &.slide-top-exit {
    transition: ${millisecond}ms;
  }

  &.slide-top-enter,
  &.slide-top-enter-done {
    transform: translateY(0px);
  }

  &.slide-top-exit,
  &.slide-top-exit-done {
    transform: translateY(-${distance}px);
  }
`;

export const SlideBottomCSSTransition = (millisecond = 500, distance = 50): SerializedStyles => css`
  transform: translateY(${distance}px);

  &.slide-bottom-enter,
  &.slide-bottom-exit {
    transition: ${millisecond}ms;
  }

  &.slide-bottom-enter,
  &.slide-bottom-enter-done {
    transform: translateY(0px);
  }

  &.slide-bottom-exit,
  &.slide-bottom-exit-done {
    transform: translateY(${distance}px);
  }
`;

export const SlideRightCSSTransition = (millisecond = 500, distance = 50): SerializedStyles => css`
  transform: translateX(${distance}px);

  &.slide-right-enter,
  &.slide-right-exit {
    transition: ${millisecond}ms;
  }

  &.slide-right-enter,
  &.slide-right-enter-done {
    transform: translateX(0px);
  }

  &.slide-right-exit,
  &.slide-right-exit-done {
    transform: translateX(${distance}px);
  }
`;

export const SlideLeftCSSTransition = (millisecond = 500, distance = 50): SerializedStyles => css`
  transform: translateX(-${distance}px);

  &.slide-left-enter,
  &.slide-left-exit {
    transition: ${millisecond}ms;
  }

  &.slide-left-enter,
  &.slide-left-enter-done {
    transform: translateX(0px);
  }

  &.slide-left-exit,
  &.slide-left-exit-done {
    transform: translateX(-${distance}px);
  }
`;
