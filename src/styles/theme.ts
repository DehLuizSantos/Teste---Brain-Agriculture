export function pxToRem(pxValue: number) {
  const baseFontSizePx = 16; // Tamanho da fonte base em pixels
  const remValue = pxValue / baseFontSizePx;
  return remValue + 'rem';
}

export const commonColors = {
  success: '#03C668',
  alert: '#FFd638',
  blue: '#3532a4',
  red: '#DE0015',
  white: '#fff',
  gray: {
    700: '#87868a',
    500: '#CBCBCB',
    300: '#eeeeee',
  },
};
export const stiColors = {
  black: '#010002',
  redSti: '#911f20',
};
export const firstColors = {
  blackSec: '#231F20',
};
export const secColors = {
  orangeSec: '#E96C2D',
  magentaSec: '#FD3E81',
  purpleSec: '#632D76',
  greenSec: '#339642',
};
export const fontSizes = {
  xSmall: pxToRem(10),
  small: pxToRem(12),
  meddium: pxToRem(14),
  large: pxToRem(16),
  xLarge: pxToRem(18),
  xxLarge: pxToRem(26),
  xxxLarge: pxToRem(32),
};
export const breakpoints = {
  sl: '1440',
  xl: '1200',
  lg: '992',
  md: '768',
  sm: '576',
  xs: '350',
};

export const theme = {
  colors: {
    ...commonColors,
    ...stiColors,
    ...firstColors,
    ...secColors,
  },
  sizes: {
    ...fontSizes,
  },
  breakpoints: { ...breakpoints },
};

export type ThemeType = typeof theme;
