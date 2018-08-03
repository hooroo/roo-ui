import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';
import { darken } from 'polished';

import { Flex, NakedButton, Box } from '../../../';

const Wrapper = Box.extend`
  flex: 1 1 auto;
  width: calc(100% / 7);
  margin: 0 -2px -2px 0;
  position: relative;
  border: ${themeGet('borders.2')} ${themeGet('colors.greys.porcelain')};

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  ${props =>
    props.selected &&
    css`
      z-index: 1;
      border-color: ${themeGet('colors.brand.secondary')};
    `};
`;

const Button = NakedButton.extend`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${themeGet('colors.greys.charcoal')};
  padding: 0;
  border: ${themeGet('borders.2')} transparent;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${themeGet('colors.greys.alto')};
  }

  ${props =>
    props.selectable &&
    css`
      background-color: ${themeGet('colors.white')};

      &:active {
        background-color: ${themeGet('colors.ui.infoBackground')};
      }
    `};

  ${props =>
    props.selected &&
    css`
      background-color: ${themeGet('colors.ui.infoBackground')};

      &:hover,
      &:focus {
        background-color: ${themeGet('colors.white')};
      }
    `};

    ${props =>
    props.selectable &&
      !props.selected &&
      css`
        &:hover,
        &:focus {
          background-color: ${themeGet('colors.ui.infoBackground')};
        }
      `};

  ${props =>
    !props.selectable &&
    !props.disabled &&
    css`
      background-color: ${themeGet('colors.greys.alto')};

      &:hover,
      &:focus {
        background-color: ${darken(0.1, themeGet('colors.greys.alto')(props))};
      }
    `};
`;

Button.defaultProps = {
  ...NakedButton.defaultProps,
  disabled: PropTypes.bool,
  blacklist: [...Object.keys(NakedButton.propTypes), 'selectable'],
};

export const CalendarDays = Flex.extend`
  flex-wrap: wrap;
  margin-bottom: 2px;
  margin-right: 2px;
`;

export const CalendarEmptyDay = Wrapper.withComponent('div').extend`
  border-color: transparent;
`;

CalendarEmptyDay.displayName = 'CalendarEmptyDay';

export const CalendarDay = ({ children, selected, ...rest }) => (
  <Wrapper selected={selected}>
    <Button selected={selected} {...rest}>{children}</Button>
  </Wrapper>
);

CalendarDay.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired,
};
