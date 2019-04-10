import React, { Fragment } from 'react';
import { ThemeProvider as Provider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import get from 'lodash/get';

const ThemeProvider = ({ theme, children, ...otherProps }) => (
  <Provider theme={theme} {...otherProps}>
    <Fragment>
      <Global styles={css`
        body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${get(theme, 'fontFamily')};
      font-size: ${get(theme, 'fontSizes.base')};
      line-height: ${get(theme, 'lineHeights.normal')};
      color: ${get(theme, 'colors.greys.charcoal')};
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
      `}
      />
      {children}
    </Fragment>
  </Provider>
);

ThemeProvider.propTypes = {
  ...Provider.propTypes,
};

export default ThemeProvider;
