import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';

import { Flex, NakedButton } from '../../../';

const Wrapper = Flex.extend`
  flex: 1 1 auto;
  width: calc(100% / 7);
  justify-content: center;
  margin: 0 -1px -1px 0;
  border: ${themeGet('borders.1')} ${themeGet('colors.greys.porcelain')};

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Button = NakedButton.extend`
  color: ${themeGet('colors.greys.charcoal')};
  padding: 0;
  width: 100%;
  border: ${themeGet('borders.2')} transparent;

  &:disabled {
    cursor: not-allowed;
    background-color: ${themeGet('colors.greys.alto')};
  }

  ${props => props.selectable &&
    css`
      background-color: ${themeGet('colors.white')};

      &:hover,
      &:focus {
        outline: none;
        border-color: ${themeGet('colors.brand.secondary')};
      }

      &:active {
        background-color: ${themeGet('colors.ui.infoBackground')};
      }
    `};

  ${props => props.selected &&
    css`
      background-color: ${themeGet('colors.ui.infoBackground')};
      border-color: ${themeGet('colors.brand.secondary')};
    `};
`;

Button.defaultProps = {
  ...NakedButton.defaultProps,
  disabled: PropTypes.bool,
  blacklist: [...Object.keys(NakedButton.propTypes), 'selectable'],
};

export const CalendarDays = Flex.extend`
  flex-wrap: wrap;
  margin-bottom: 1px;
  margin-right: 1px;
`;

export const CalendarEmptyDay = Wrapper.withComponent('div').extend`
  border-color: transparent;
`;

CalendarEmptyDay.displayName = 'CalendarEmptyDay';

export const CalendarDay = ({ children, ...rest }) => (
  <Wrapper>
    <Button {...rest}>
      {children}
    </Button>
  </Wrapper>
);

CalendarDay.propTypes = {
  children: PropTypes.node.isRequired,
};
