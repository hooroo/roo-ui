import { rem } from 'polished';

export const colors = {
  brand: {
    primary: '#e40000',
    secondary: '#8de2e0',
    tertiary: '#D20000',
    quaternary: '#F9F3E9',
  },
  ui: {
    link: '#e00e00',
    linkHover: '#870000',
    info: '#8de2e0',
    infoBackground: '#bff4f2',
    error: '#ed710b',
    errorBackground: '#fcebcd',
    success: '#35a509',
    successBackground: '#DEF2DE',
  },
  grey: [
    '#161616',
    '#323232',
    '#555555',
    '#666666',
    '#7B7B7B',
    '#DADADA',
    '#F4F5F6',
    '#F5F5F5',
    '#FFFFFF',
  ],
};

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

export default {
  colors,
  breakpoints: ['40em', '52em', '64em'],
  space: [
    rem(0),
    rem(4),
    rem(8),
    rem(12),
    rem(16),
    rem(24),
    rem(32),
    rem(64),
    rem(128),
    rem(256),
    rem(512),
  ],
  borders,
  radii,
  shadows: {
    none: 0,
    default: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',
    heavy: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
    focus: `0 0 0 2px ${colors.secondary};`,
  },
  transitions: {
    default: '200ms ease-in',
  },
  fontFamily: 'QantasCiutadella, sans-serif',
  fontSizes: {
    xxs: rem(12),
    xs: rem(14),
    sm: rem(16),
    base: rem(18),
    lg: rem(22),
    xl: rem(26),
    xxl: rem(30),
    xxxl: rem(34),
    xxxxl: rem(46),
  },
  lineHeights: {
    tight: 1,
    normal: 1.35,
    loose: 1.5,
  },
  fontWeights: {
    normal: 500,
    bold: 600,
  },
  letterSpacings: {
    normal: '0',
    wide: '0.125em',
  },
  buttons: {
    default: {
      color: 'white',
      backgroundColor: colors.grey[1],
    },
    primary: {
      color: 'white',
      backgroundColor: colors.brand.primary,
    },
  },
};
