import React from 'react';
import { injectGlobal, ThemeProvider as Provider } from 'styled-components';

const ThemeProvider = ({ theme, ...otherProps }) => {
  injectGlobal`
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      font-family: ${theme.fontFamily};
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.normal};
      color: ${theme.colors.greys.charcoal};
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }
  `;

  return (
    <Provider theme={theme} {...otherProps} />
  );
};

ThemeProvider.propTypes = {
  ...Provider.propTypes,
};

export default ThemeProvider;
