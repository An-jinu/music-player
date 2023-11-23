import { Route, Routes } from 'react-router-dom';

// Pages
import Category from '@/pages/Category';
import Login from '@/pages/Login';

// Style
import { Global, ThemeProvider } from '@emotion/react';
import { defaultStyle } from './assets/style/global';
import dayjs from 'dayjs';
import { darkColor, lightColor } from './assets/style';
import { useRecoilValue } from 'recoil';
import { themeState } from './state/theme';
import Playlist from './pages/Playlist';
import MainLayout from './assets/layout/MainLayout';

// Dayjs

dayjs().locale('ko');

const App = (): React.ReactElement => {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === 'LIGHT' ? lightColor : darkColor}>
      <Global styles={defaultStyle} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Category />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
