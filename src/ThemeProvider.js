import React from 'react';
import { ThemeProvider as Provider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import get from 'lodash/get';

const ThemeProvider = ({ theme, children, ...otherProps }) => (
  <Provider theme={theme} {...otherProps}>
    <React.Fragment>
      <Global
        styles={css`
          body {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            color: ${get(theme, 'colors.greys.charcoal')};
            font-family: ${get(theme, 'fontFamily')};
            font-size: ${get(theme, 'fontSizes.base')};
            line-height: ${get(theme, 'lineHeights.normal')};
          }

          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
        `}
      />

      {children}
    </React.Fragment>
  </Provider>
);

ThemeProvider.propTypes = Provider.propTypes;

export default ThemeProvider;
