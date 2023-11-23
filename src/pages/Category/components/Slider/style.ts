import { Effect, Flex } from '@/assets/style';
import { DESKTOP_CONTAINER } from '@/assets/style/global';
import styled from '@emotion/styled';
import { ControllerProps } from './model';

export const Container = styled(Flex)`
  width: 100%;
`;

export const TitleContainer = styled(Flex)`
  width: ${DESKTOP_CONTAINER}px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.5;
`;

export const SliderContainer = styled(Flex)`
  width: ${DESKTOP_CONTAINER}px;
  height: 300px;
  position: relative;
`;

export const ImageContainer = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export const SlideImage = styled.img`
  width: ${DESKTOP_CONTAINER}px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: ${Effect.Shadow01};
`;

export const Controller = styled(Flex)<ControllerProps>`
  position: absolute;
  backdrop-filter: blur(50px);
  background-color: rgba(250, 250, 250, 0.6);
  width: 30px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;

  top: 50%;
  ${({ type }) => type}: calc((100% - 1540px) / 2);
  transform: translateY(-50%);
`;
