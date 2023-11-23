import { IconMoon, IconSun } from '@/assets/icons';
import { themeState } from '@/state/theme';
import { useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Container, Icon } from './style';

const ThemeController = (): React.ReactElement => {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleChangeTheme = () => {
    const updatedTheme = theme === 'LIGHT' ? 'DARK' : 'LIGHT';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useLayoutEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('DARK');
    }

    const savedTheme = localStorage.getItem('theme') as 'LIGHT' | 'DARK';
    if (savedTheme && ['DARK', 'LIGHT'].includes(savedTheme)) {
      setTheme(savedTheme);
      return;
    }
  }, []);

  return (
    <Container onClick={handleChangeTheme}>
      <Icon isLight={theme === 'LIGHT'}>
        <IconSun width={30} height={30} className="sun" /> <IconMoon width={30} height={30} className="moon" />
      </Icon>
    </Container>
  );
};

export default ThemeController;
