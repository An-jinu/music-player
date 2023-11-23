import { atom } from 'recoil';

export const themeState = atom<'LIGHT' | 'DARK'>({
  key: 'themeState',
  default: 'LIGHT',
});
