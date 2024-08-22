export function pxToRem(pxValue: number) {
  const baseFontSizePx = 16; // Tamanho da fonte base em pixels
  const remValue = pxValue / baseFontSizePx;
  return remValue + 'rem';
}

export const commonColors = {
  success: '#03C668',
  alert: '#FFd638',
  blue: '#3532a4',
  blueNew: 'rgba(58, 151, 237, 1)',
  red: '#DE0015',
  white: '#fff',
  gray: {
    700: '#87868a',
    500: '#CBCBCB',
    300: '#eeeeee',
  },
};
export const stiColors = {
  blackSti: '#010002',
  redSti: '#911f20',
};
export const wcaColors = {
  blackWca: '#231F20',
  yellowWca: '#FFCB05',
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
export const responsive = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const theme = {
  colors: {
    ...commonColors,
    ...stiColors,
    ...wcaColors,
    ...secColors,
  },
  sizes: {
    ...fontSizes,
  },
  responsive: { ...responsive },
};

export type ThemeType = typeof theme;
