import { rem } from 'polished';

const colors = {
  brand: {
    primary: '#E40000',
    secondary: '#8DE2E0',
    tertiary: '#D20000',
    quaternary: '#F9F3E9',
  },
  ui: {
    link: '#E00E00',
    linkHover: '#870000',
    info: '#8DE2E0',
    infoBackground: '#E7F7F7',
    error: '#ED710B',
    errorBackground: '#FCEBCD',
    success: '#35A509',
    successBackground: '#DEF2DE',
  },
  grey: [
    '#323232',
    '#666666',
    '#DADADA',
    '#F4F5F6',
  ],
  white: '#FFFFFF',
  text: '#323232',
  starRating: '#fbcb3b',
};

const fontFamily = 'QantasCiutadella, sans-serif';

const fontSizes = {
  sm: rem('14px'),
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
  label: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    color: colors.grey[0],
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

const maxWidths = {
  default: rem('1280px'),
};

const space = [
  rem('0px'),
  rem('4px'),
  rem('8px'),
  rem('12px'),
  rem('16px'),
  rem('20px'),
  rem('24px'),
  rem('28px'),
  rem('32px'),
  rem('36px'),
];

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
  focus: `0 0 0 2px ${colors.brand.secondary};`,
};

const transitions = {
  default: '200ms ease-in',
};

const buttons = {
  default: {
    color: 'white',
    backgroundColor: colors.grey[0],
  },
  primary: {
    color: 'white',
    backgroundColor: colors.brand.primary,
  },
};

export default {
  colors,
  breakpoints,
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
};
