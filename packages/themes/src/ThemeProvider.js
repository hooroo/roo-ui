import { ThemeProvider, injectGlobal } from 'styled-components';
import { themeGet } from 'styled-system';

injectGlobal`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    font-family: ${themeGet('fontFamily')};
    font-size: ${themeGet('fontSizes.base')};
    line-height: ${themeGet('lineHeights.normal')};
    color: ${themeGet('colors.text')};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default ThemeProvider;
