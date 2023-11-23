import { IconChevronLeft, IconChevronRight } from '@/assets/icons';
import { Color } from '@/assets/style';
import { DESKTOP_CONTAINER } from '@/assets/style/global';
import { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Controller, ImageContainer, SlideImage, SliderContainer, Title, TitleContainer } from './style';

const imageList = [
  `https://via.placeholder.com/${DESKTOP_CONTAINER}x300/f1f1f1/.png?text=Slide+1`,
  `https://via.placeholder.com/${DESKTOP_CONTAINER}x300/f1f1f1/.png?text=Slide+2`,
  `https://via.placeholder.com/${DESKTOP_CONTAINER}x300/f1f1f1/.png?text=Slide+3`,
  `https://via.placeholder.com/${DESKTOP_CONTAINER}x300/f1f1f1/.png?text=Slide+4`,
];

const IMAGE_GAP = 24; // px
const IMAGE_INTERVAL = 3000; // ms
const IMAGE_TRANSITION_DURATION = 500; // ms

const START_INDEX = 2;
const END_INDEX = imageList.length + 1;

const Slider = (): React.ReactElement => {
  // State
  const [activeIndex, setActiveIndex] = useState<number>(START_INDEX);
  const [isSlide, setIsSlide] = useState<boolean>(false);
  const [isTransitionDisabled, setIsTransitionDisabled] = useState<boolean>(false);

  // Memo
  const getImageList = useMemo(() => {
    return [imageList.at(-2), imageList.at(-1), ...imageList, imageList[0], imageList[1]];
  }, []);

  const containerStyle = useMemo((): CSSProperties => {
    return {
      transform: `translateX(calc(-${100 * activeIndex}% - ${IMAGE_GAP * activeIndex}px))`,
      transition: isTransitionDisabled && (activeIndex === START_INDEX || activeIndex === END_INDEX) ? '' : `transform ${IMAGE_TRANSITION_DURATION}ms`,
    };
  }, [activeIndex, isTransitionDisabled]);

  // Callback
  const moveImage = useCallback((moveCount: number) => {
    setActiveIndex((index) => index + moveCount);
    setIsSlide(true);
    setIsTransitionDisabled(false);
  }, []);

  // Handler
  const handleClickController = (direction: 'left' | 'right') => {
    if (isSlide) return;
    moveImage(direction === 'left' ? -1 : 1);
  };

  // Hook
  useEffect(() => {
    // isSlide 값을 IMAGE_TRANSITION_DURATION 만큼의 시간이 지난 뒤 초기화 해줌
    if (isSlide) {
      const timeout = setTimeout(() => setIsSlide(false), IMAGE_TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }

    /* 
      IMAGE_INTERVAL 시간마다 activeIndex 값을 1씩 증가시킴
      isSlide 값의 변동이 있으면 인터벌 초기화
    */
    const interval = setInterval(() => moveImage(1), IMAGE_INTERVAL);
    return () => clearInterval(interval);
  }, [isSlide, moveImage]);

  useEffect(() => {
    let timeout = 0;
    let nextIndex = -1;

    if (activeIndex > imageList.length + 1) {
      nextIndex = START_INDEX;
    } else if (activeIndex < START_INDEX) {
      nextIndex = END_INDEX;
    }

    /* 
      위 조건에 맞는 경우 IMAGE_TRANSITION_DURATION 만큼의 시간이 지난 뒤
      START_INDEX or END_INDEX 값으로 activeIndex 변경
    */
    if (nextIndex != -1) {
      timeout = setTimeout(() => {
        setActiveIndex(nextIndex);
        setIsTransitionDisabled(true);
      }, IMAGE_TRANSITION_DURATION);
    }
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <Container column alignItems="center" gap="24px">
      <TitleContainer>
        <Title>
          이런 프로젝트는 <br />
          어떠세요?
        </Title>
      </TitleContainer>

      <SliderContainer>
        <ImageContainer style={containerStyle} gap={`${IMAGE_GAP}px`}>
          {getImageList.map((image, index) => {
            return <SlideImage src={image} key={index} />;
          })}
        </ImageContainer>

        <Controller alignItems="center" justifyContent="center" type="left" onClick={() => handleClickController('left')}>
          <IconChevronLeft stroke={Color.Gray80} width="16" height="16" />
        </Controller>
        <Controller alignItems="center" justifyContent="center" type="right" onClick={() => handleClickController('right')}>
          <IconChevronRight stroke={Color.Gray80} width="16" height="16" />
        </Controller>
      </SliderContainer>
    </Container>
  );
};

export default Slider;
