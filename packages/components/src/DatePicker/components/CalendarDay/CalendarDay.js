import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { styledOmitProps } from '../../../styledOmitProps';

import { NakedButton, Box } from '../../../';

const DayWrapper = styledOmitProps(Box, { omit: ['selected'] })`
  flex: 1 1 auto;
  width: calc(100% / 7);
  margin: 0 -1px -1px 0;
  position: relative;
  border: ${themeGet('borders.1')} transparent;

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
};

const Button = styledOmitProps(NakedButton, { omit: ['selected'] })`
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
    !props.highlighted &&
    css`
      background-color: ${themeGet('colors.lightBlue')};

      &:hover,
      &:focus {
        border-color: ${themeGet('colors.brand.secondary')};
        background-color: ${themeGet('colors.white')};;
      }
    `};

  ${props =>
    props.highlighted &&
    !props.selected &&
    css`
      background-color: ${themeGet('colors.lightBlue')};

      &:hover,
      &:focus {
        background-color: transparent;
        border-color: ${themeGet('colors.brand.secondary')};
      }
    `};

  ${props =>
    props.highlighted &&
    props.selected &&
    css`
      background-color: ${themeGet('colors.brand.secondary')};

      &:hover {
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
        background-color: ${themeGet('colors.white')};
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
  highlighted: false,
};

CalendarDay.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  selectable: PropTypes.bool,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
};

export const CalendarEmptyDay = styled(DayWrapper.withComponent('div'))`
  border-color: transparent;
`;

CalendarEmptyDay.displayName = 'CalendarEmptyDay';
