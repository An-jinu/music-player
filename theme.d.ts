import '@emotion/react';
import { ColorType } from '@/assets/style/Color';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ColorType {}
}
