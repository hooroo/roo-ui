import { rem } from 'polished';
import range from 'lodash/range';

import * as icons from './defaultIcons';

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

const ui = {
  error: namedColors.orange,
  errorBackground: namedColors.lightOrange,
  info: namedColors.blue,
  infoBackground: namedColors.lightBlue,
  link: namedColors.red,
  linkHover: namedColors.maroon,
  success: namedColors.green,
  successBackground: namedColors.lightGreen,
};

const colors = {
  brand,
  greys,
  ui,
  ...namedColors,
};

const alertStyles = {
  default: { bg: 'greys.porcelain' },
  error: {
    bg: 'ui.errorBackground',
    icon: {
      name: 'warning',
      color: 'ui.error',
    },
  },
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
};

const borders = [0, '1px solid', '2px solid', '3px solid'];

const breakpoints = ['40rem', '52rem', '64rem'];

const buttons = {
  default: {
    color: 'white',
    backgroundColor: 'greys.charcoal',
  },
  primary: {
    color: 'white',
    backgroundColor: 'brand.primary',
  },
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

const fontWeights = {
  normal: 500,
  bold: 600,
};

const letterSpacings = {
  normal: '0',
  wide: '0.125em',
};

const lineHeights = {
  tight: 1,
  normal: 1.35,
  loose: 1.5,
};

const maxWidths = {
  default: rem('1280px'),
};

const mediaQueries = breakpoints.map(
  n => `@media screen and (min-width: ${n})`,
);

const opacity = {
  disabled: 0.7,
};

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

const space = range(0, 129, 4).map(i => rem(`${i}px`));

const textStyles = {
  caps: {
    textTransform: 'uppercase',
    fontWeight: fontWeights.bold,
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
  label: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.loose,
    fontWeight: fontWeights.bold,
    color: colors.greys.charcoal,
  },
  text: {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.loose,
    fontWeight: fontWeights.normal,
  },
};

const transitions = {
  default: '200ms ease-in',
};

export default {
  alertStyles,
  borders,
  breakpoints,
  buttons,
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  icons,
  letterSpacings,
  lineHeights,
  maxWidths,
  mediaQueries,
  opacity,
  radii,
  shadows,
  space,
  textStyles,
  transitions,
};
