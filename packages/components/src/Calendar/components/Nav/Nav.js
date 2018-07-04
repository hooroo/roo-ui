import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';

import { Flex, NakedButton, Icon } from '../../../';

const Wrapper = Flex.extend`
  width: 100%;
  position: absolute;
  justify-content: space-between;
`;

const NavButton = NakedButton.extend`
  border-radius: ${themeGet('radii.rounded')};
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.grey.1')};
  box-shadow: ${themeGet('shadows.default')};

  &:hover,
  &:focus {
    outline: none;
    color: ${themeGet('colors.brand.primary')};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: ${themeGet('colors.grey.2')};
  }
`;

const Nav = ({ prevProps, nextProps }) => (
  <Wrapper>
    <NavButton {...prevProps}>
      <Icon name="chevronLeft" />
    </NavButton>

    <NavButton {...nextProps}>
      <Icon name="chevronRight" />
    </NavButton>
  </Wrapper>
);

Nav.propTypes = {
  prevProps: PropTypes.shape().isRequired,
  nextProps: PropTypes.shape().isRequired,
};

export default Nav;
