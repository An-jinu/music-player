import React from 'react';
import { Outlet } from 'react-router';
import SideBar from './components/Slidebar';
import { Container, ContentsContainer } from './style';

const MainLayout = (): React.ReactElement => {
  return (
    <Container gap="16px">
      <SideBar />
      <ContentsContainer>
        <Outlet />
      </ContentsContainer>
    </Container>
  );
};

export default MainLayout;
