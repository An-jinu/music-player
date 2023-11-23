import ThemeController from '@/components/ThemeController';
import React from 'react';
import { Container } from './style';

const SideBar = (): React.ReactElement => {
  return (
    <Container>
      <ThemeController />
    </Container>
  );
};

export default SideBar;
