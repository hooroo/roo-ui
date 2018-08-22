import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';
import { darken } from 'polished';

import { NakedButton, Box } from '../../../';

const DayWrapper = Box.extend`
  flex: 1 1 auto;
  width: calc(100% / 7);
  margin: 0 -1px -1px 0;
  position: relative;
  ${props => css`
    border: ${themeGet('borders.1')} ${darken(0.1, themeGet('colors.greys.alto')(props))};
  `}

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  ${props =>
    props.selectable &&
    css`
      &:hover {
        border-color: ${themeGet('colors.brand.secondary')};
        z-index: 1;
      }
    `};

  ${props =>
    props.selected &&
    css`
      z-index: 1;
      border-color: ${themeGet('colors.brand.secondary')};
    `};
`;

DayWrapper.defaultProps = {
  ...Box.defaultProps,
  blacklist: [...Object.keys(Box.propTypes), 'selected', 'selectable'],
};

const Button = NakedButton.extend`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${themeGet('colors.greys.charcoal')};
  padding: 0;
  border: ${themeGet('borders.1')} transparent;

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
    `};

  ${props =>
    props.selected &&
    css`
      background-color: ${themeGet('colors.brand.secondary')};

      &:hover {
        background-color: transparent;
        border-color: ${themeGet('colors.brand.secondary')};
      }
    `};

  ${props =>
    props.isHighlightedDay &&
    !props.selected &&
    css`
      background-color: ${themeGet('colors.ui.infoBackground')};

      &:hover,
      &:focus {
        background-color: transparent;
        border-color: ${themeGet('colors.brand.secondary')};
      }
    `};

  ${props =>
    props.selectable &&
    !props.selected &&
    css`
      &:hover,
      &:focus {
        background-color: transparent;
        border-color: ${themeGet('colors.brand.secondary')};
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
  blacklist: [...Object.keys(NakedButton.propTypes), 'selectable', 'isHighlightedDay'],
};

export const CalendarDay = ({ children, selected, ...rest }) => (
  <DayWrapper selected={selected}>
    <Button selected={selected} {...rest}>{children}</Button>
  </DayWrapper>
);

CalendarDay.defaultProps = {
  selectable: true,
  disabled: false,
  selected: false,
  isHighlightedDay: false,
};

CalendarDay.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  selectable: PropTypes.bool,
  disabled: PropTypes.bool,
  isHighlightedDay: PropTypes.bool,
};

export const CalendarEmptyDay = DayWrapper.withComponent('div').extend`
  border-color: transparent;
`;

CalendarEmptyDay.displayName = 'CalendarEmptyDay';
