import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import GlobalStyles from './GlobalStyles';

const ThemeProvider = ({ theme, ...otherProps }) => (
  <Provider theme={theme}>
    <GlobalStyles {...otherProps} />
  </Provider>
);

ThemeProvider.propTypes = {
  ...Provider.propTypes,
};

export default ThemeProvider;
