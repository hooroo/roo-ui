import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';

import { Flex, NakedButton, Icon } from '../../../';

const Wrapper = Flex.extend`
  width: 100%;
  position: absolute;
  justify-content: space-between;
  padding: 0 ${themeGet('space.4')};
`;

const Button = NakedButton.extend`
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

const CalendarNav = ({ prevProps, nextProps }) => (
  <Wrapper>
    <Button {...prevProps}>
      <Icon name="chevronLeft" />
    </Button>

    <Button {...nextProps}>
      <Icon name="chevronRight" />
    </Button>
  </Wrapper>
);

CalendarNav.propTypes = {
  prevProps: PropTypes.shape().isRequired,
  nextProps: PropTypes.shape().isRequired,
};

export default CalendarNav;
