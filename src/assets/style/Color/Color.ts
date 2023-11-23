export const Color = {
  White: '#FFFFFF',
  OpacityWhite: (opacity: number): string => `rgba(255, 255, 255, ${opacity})`,
  Black: '#000000',

  /** Blue */
  Blue50: '#EAF1FD',
  Blue100: '#D4E2FC',
  Blue200: '#BFD4FA',
  Blue300: '#AAC6F9',
  Blue400: '#7FA9F6',
  Blue500: '#558DF3',
  Blue600: '#2A70F0',
  Blue700: '#225ACO',
  Blue800: '#194390',
  Blue900: '#112D60',

  /** Teal */
  Teal50: '#EBFAF8',
  Teal100: '#D7F4F0',
  Teal200: '#C2EFE9',
  Teal300: '#AEEAE2',
  Teal400: '#86DFD3',
  Teal500: '#5DD5C4',
  Teal600: '#35CAB6',
  Teal700: '#2AA192',
  Teal800: '#20796D',
  Teal900: '#155149',

  /** Purple */
  Purple50: '#F5EAF8',
  Purple100: '#EBD5F0',
  Purple200: '#E1C0E9',
  Purple300: '#D7ACE2',
  Purple400: '#C382D3',
  Purple500: '#B059C4',
  Purple600: '#9C2FB6',
  Purple700: '#7D2692',
  Purple800: '#5E1C6D',
  Purple900: '#3E1349',

  /** Gray */
  Gray50: '#F8F8F8',
  Gray100: '#E9E9E9',
  Gray200: '#DADADA',
  Gray300: '#BDBDBD',
  Gray400: '#9F9F9F',
  Gray500: '#818181',
  Gray600: '#646464',
  Gray700: '#505050',
  Gray800: '#3C3C3C',
  Gray900: '#282828',

  /** Core */

  /** Status */
  StatusPositive: '#00C37D',
  StatusWarning: '#FFC700',
  StatusAlert: '#FF8A00',
  StatusNegative: '#FF6C61',

  /** Blur */
  BlurBlue: 'rgba(42, 112, 240, 0.08)',
  BlurGreen: 'rgba(0, 195, 125, 0.12)',
  BlurRed: 'rgba(255, 108, 97, 0.12)',
};

export const lightColor = {
  /** Background */
  BackgroundPrimary: '#FFFFFF',
  BackgroundBase: '#f8f8f8',
  BackgroundSecondary: '#F8F8F8',
  BackgroundTertiary: '#E9E9E9',
  BackgroundTranslucent: 'rgba(255, 255, 255, 0.75)',
  BackgroundPanel: 'rgba(250, 250, 250, 0.8)',

  /** Content */
  ContentPrimary: '#000000',
  ContentSecondary: '#646464',
  ContentTertiary: '#818181',
  ContentDisabled: '#BDBDBD',

  /** Border */
  BorderDefault: '#DADADA',
  BorderTranslucent: 'rgba(0, 0, 0, 0.08)',
  BorderSelected: '#000000',

  /** Blur */
  BlurNormal: 'rgba(0, 0, 0, 0.25)',
  BlurSmall: 'rgba(0, 0, 0, 0.12)',

  /** Overlay */
  OverlayHover: 'rgba(0, 0, 0, 0.03)',
  OverlayFocus: 'rgba(0, 0, 0, 0.06)',

  ...Color,
};

export const darkColor = {
  /** Background */
  BackgroundPrimary: '#000000',
  BackgroundBase: '#121212',
  BackgroundSecondary: '#282828',
  BackgroundTertiary: '#3c3c3c',
  BackgroundTranslucent: 'rgba(0, 0, 0, 0.7)',
  BackgroundPanel: 'rgba(32, 36, 40, 0.8)',

  /** Content */
  ContentPrimary: '#ffffff',
  ContentSecondary: '#bdbdbd',
  ContentTertiary: '#9f9f9f',
  ContentDisabled: '#646464',

  /** Border */
  BorderDefault: '#505050',
  BorderTranslucent: 'rgba(255, 255, 255, 0.2)',
  BorderSelected: '#ffffff',

  /** Blur */
  BlurNormal: 'rgba(255, 255, 255, 0.25)',
  BlurSmall: 'rgba(255, 255, 255, 0.12)',

  /** Overlay */
  OverlayHover: 'rgba(255, 255, 255, 0.03)',
  OverlayFocus: 'rgba(255, 255, 255, 0.03)',

  ...Color,
};

export type ColorType = typeof lightColor;
