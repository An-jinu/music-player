import { css, SerializedStyles } from '@emotion/react';

const FadeDefaultCSSTransition = css`
  opacity: 0;
  visibility: hidden;

  &.fade-enter,
  &.fade-enter-done,
  &.fade-top-enter,
  &.fade-top-enter-done,
  &.fade-bottom-enter,
  &.fade-bottom-enter-done,
  &.fade-right-enter,
  &.fade-right-enter-done,
  &.fade-left-enter,
  &.fade-left-enter-done {
    opacity: 1;
    visibility: visible;
  }

  &.fade-exit,
  &.fade-exit-done,
  &.fade-top-exit,
  &.fade-top-exit-done,
  &.fade-bottom-exit,
  &.fade-bottom-exit-done,
  &.fade-right-exit,
  &.fade-right-exit-done,
  &.fade-left-exit,
  &.fade-left-exit-done {
    opacity: 0;
    visibility: hidden;
  }
`;

export const FadeCSSTransition = (millisecond = 300): SerializedStyles => css`
  ${FadeDefaultCSSTransition}

  &.fade-enter,
  &.fade-exit {
    transition: ${millisecond}ms;
  }
`;

export const FadeTopCSSTransition = (millisecond = 300, distance = 50): SerializedStyles => css`
  transform: translateY(-${distance}px);
  ${FadeDefaultCSSTransition}

  &.fade-top-enter,
  &.fade-top-exit {
    transition: ${millisecond}ms;
  }

  &.fade-top-enter,
  &.fade-top-enter-done {
    transform: translateY(0px);
  }

  &.fade-top-exit,
  &.fade-top-exit-done {
    transform: translateY(-${distance}px);
  }
`;

export const FadeBottomCSSTransition = (millisecond = 300, distance = 50): SerializedStyles => css`
  transform: translateY(${distance}px);
  ${FadeDefaultCSSTransition}

  &.fade-bottom-enter,
  &.fade-bottom-exit {
    transition: ${millisecond}ms;
  }

  &.fade-bottom-enter,
  &.fade-bottom-enter-done {
    transform: translateY(0px);
  }

  &.fade-bottom-exit,
  &.fade-bottom-exit-done {
    transform: translateY(${distance}px);
  }
`;

export const FadeRightCSSTransition = (millisecond = 300, distance = 50): SerializedStyles => css`
  transform: translateX(${distance}px);
  ${FadeDefaultCSSTransition}

  &.fade-right-enter,
  &.fade-right-exit {
    transition: ${millisecond}ms;
  }

  &.fade-right-enter,
  &.fade-right-enter-done {
    transform: translateX(0px);
  }

  &.fade-right-exit,
  &.fade-right-exit-done {
    transform: translateX(${distance}px);
  }
`;

export const FadeLeftCSSTransition = (millisecond = 300, distance = 50): SerializedStyles => css`
  transform: translateX(-${distance}px);
  ${FadeDefaultCSSTransition}

  &.fade-left-enter,
  &.fade-left-exit {
    transition: ${millisecond}ms;
  }

  &.fade-left-enter,
  &.fade-left-enter-done {
    transform: translateX(0px);
  }

  &.fade-left-exit,
  &.fade-left-exit-done {
    transform: translateX(-${distance}px);
  }
`;
