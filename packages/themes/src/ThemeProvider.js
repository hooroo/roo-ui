import React, { Fragment } from 'react';
import { themeGet } from 'styled-system';
import { ThemeProvider as Provider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${themeGet('fontFamily')};
      font-size: ${themeGet('fontSizes.base')};
      line-height: ${themeGet('lineHeights.normal')};
      color: ${themeGet('colors.greys.charcoal')};
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
  `;

const ThemeProvider = ({ theme, children, ...otherProps }) => (
  <Provider theme={theme} {...otherProps}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </Provider>
);

ThemeProvider.propTypes = {
  ...Provider.propTypes,
};

export default ThemeProvider;
