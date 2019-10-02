import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';

import { Flex, NakedButton, Icon } from 'components';

const Wrapper = styled(Flex)`
  width: 100%;
  position: absolute;
  justify-content: space-between;
  padding: 0 ${themeGet('space.4')};
`;

const Button = styled(NakedButton)`
  border-radius: ${themeGet('radii.rounded')};
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.greys.steel')};
  box-shadow: ${themeGet('shadows.default')};

  &:hover,
  &:focus {
    outline: none;
    color: ${themeGet('colors.brand.primary')};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: ${themeGet('colors.greys.alto')};
  }
`;

Button.displayName = 'Button';

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
