import { rem } from 'polished';
import range from 'lodash/range';

const brand = {
  primary: '#E40000',
  secondary: '#8DE2E0',
  tertiary: '#D20000',
  quaternary: '#F9F3E9',
};

const greys = {
  charcoal: '#323232',
  steel: '#666666',
  alto: '#DADADA',
  porcelain: '#F4F5F6',
  dusty: '#999999',
  mineShaft: '#222222',
};

const namedColors = {
  white: '#FFFFFF',
  brightSun: '#FBCB3B',
  red: '#E00E00',
  maroon: '#870000',
  blue: '#8DE2E0',
  lightBlue: '#E7F7F7',
  orange: '#ED710B',
  lightOrange: '#FCEBCD',
  green: '#35A509',
  lightGreen: '#DEF2DE',
};

const ui = {
  link: namedColors.red,
  linkHover: namedColors.maroon,
  info: namedColors.blue,
  infoBackground: namedColors.lightBlue,
  error: namedColors.orange,
  errorBackground: namedColors.lightOrange,
  success: namedColors.green,
  successBackground: namedColors.lightGreen,
};

const colors = {
  brand,
  ui,
  greys,
  ...namedColors,
};

const fontFamily = 'Ciutadella, sans-serif';

const fontSizes = {
  xs: rem('13px'),
  sm: rem('15px'),
  base: rem('16px'),
  lg: rem('18px'),
  xl: rem('22px'),
  '2xl': rem('26px'),
  '3xl': rem('36px'),
  '4xl': rem('46px'),
};

const lineHeights = {
  tight: 1,
  normal: 1.35,
  loose: 1.5,
};

const fontWeights = {
  normal: 500,
  bold: 600,
};

const letterSpacings = {
  normal: '0',
  wide: '0.125em',
};

const textStyles = {
  text: {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.loose,
    fontWeight: fontWeights.normal,
  },
  caps: {
    textTransform: 'uppercase',
    fontWeight: fontWeights.bold,
  },
  label: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    color: colors.greys.charcoal,
  },
  h1: {
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
  },
  h2: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
  },
  h3: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.loose,
  },
  h4: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.loose,
  },
  h5: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.loose,
  },
  h6: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.loose,
  },
};

const breakpoints = ['40rem', '52rem', '64rem'];

const mediaQueries = breakpoints.map(n => `@media screen and (min-width: ${n})`);

const maxWidths = {
  default: rem('1280px'),
};

// TODO: move to README
//  0 0px
//  1 4px
//  2 8px
//  3 12px
//  4 16px
//  5 20px
//  6 24px
//  7 28px
//  8 32px
//  9 36px
// 10 40px
// 11 44px
// 12 48px
// 13 52px
// 14 56px
// 15 60px
// 16 64px
// 17 68px
// 18 72px
// 19 76px
// 20 80px
// 21 84px
// 22 88px
// 23 92px
// 24 96px
// 25 100px
// 26 104px
// 27 108px
// 28 112px
// 29 116px
// 30 120px
// 31 124px
// 32 128px
const space = range(0, 129, 4).map(i => rem(`${i}px`));

const borders = [
  0,
  '1px solid',
  '2px solid',
  '3px solid',
];

const radii = {
  none: 0,
  default: '4px',
  rounded: '1000px',
};

const shadows = {
  none: 0,
  default: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',
  heavy: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
  focus: `0 0 2px 2px ${colors.greys.dusty};`,
};

const transitions = {
  default: '200ms ease-in',
};

const buttons = {
  default: {
    color: 'white',
    backgroundColor: colors.greys.charcoal,
  },
  primary: {
    color: 'white',
    backgroundColor: colors.brand.primary,
  },
};

const alertStyles = {
  default: { bg: 'greys.porcelain' },
  info: {
    bg: 'ui.infoBackground',
    icon: {
      name: 'info',
      color: 'greys.charcoal',
    },
  },
  success: {
    bg: 'ui.successBackground',
    icon: {
      name: 'checkCircle',
      color: 'ui.success',
    },
  },
  error: {
    bg: 'ui.errorBackground',
    icon: {
      name: 'warning',
      color: 'ui.error',
    },
  },
};

const gutters = {
  default: 3,
};

const opacity = {
  disabled: 0.7,
};

const readonlyStyles = {
  naked: {
    borderColor: 'transparent',
    background: 'transparent',
    paddingLeft: 0,
  },
  dimmed: {
    background: colors.greys.porcelain,
    color: colors.greys.steel,
  },
};

export default {
  gutters,
  colors,
  breakpoints,
  mediaQueries,
  space,
  maxWidths,
  borders,
  radii,
  shadows,
  transitions,
  fontFamily,
  fontSizes,
  lineHeights,
  fontWeights,
  textStyles,
  letterSpacings,
  buttons,
  alertStyles,
  opacity,
  readonlyStyles,
};
