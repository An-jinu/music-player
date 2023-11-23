import styled from '@emotion/styled';
import { CSSProperties } from 'react';

export interface FlexProps {
  auto?: boolean;
  column?: boolean;
  gap?: string;
  alignItems?: CSSProperties['alignItems'];
  alignSelf?: CSSProperties['alignSelf'];
  justifyContent?: CSSProperties['justifyContent'];
  justifySelf?: CSSProperties['justifySelf'];
}

export const Flex = styled.div<FlexProps>(({ auto, column, gap, alignItems, alignSelf, justifyContent, justifySelf }) => ({
  display: 'flex',
  flex: auto ? 'auto' : undefined,
  flexDirection: column ? 'column' : 'row',
  gap,
  alignItems,
  alignSelf,
  justifyContent,
  justifySelf,
}));
