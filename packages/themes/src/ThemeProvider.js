import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider as Provider } from 'styled-components';
import { themeGet } from 'styled-system';

export const Base = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: ${themeGet('fontFamily')};
  font-size: ${themeGet('fontSizes.base')};
  line-height: ${themeGet('lineHeights.normal')};
  color: ${themeGet('colors.defaultText')};

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

const ThemeProvider = ({ theme, ...props }) => (
  <Provider theme={theme}>
    <Base {...props} />
  </Provider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.shape({}).isRequired,
};

export default ThemeProvider;
