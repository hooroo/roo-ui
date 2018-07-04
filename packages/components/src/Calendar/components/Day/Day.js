import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';

import { Flex, NakedButton } from '../../../';

const Wrapper = Flex.extend`
  flex: 1 1 calc(100% / 7);
  justify-content: center;
  margin: 0 -1px -1px 0;
  border: ${themeGet('borders.1')} ${themeGet('colors.grey.3')};

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const DayButton = NakedButton.extend`
  color: ${themeGet('colors.grey.0')};
  padding: 0;
  width: 100%;
  border: 2px solid transparent;

  &:disabled {
    cursor: not-allowed;
    background-color: ${themeGet('colors.grey.2')};
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

DayButton.defaultProps = {
  ...NakedButton.defaultProps,
  blacklist: [...Object.keys(NakedButton.propTypes), 'selectable'],
};

export const EmptyDay = Wrapper.withComponent('div').extend`
  border-color: transparent;
`;

export const Day = ({ children, ...rest }) => (
  <Wrapper>
    <DayButton {...rest}>
      {children}
    </DayButton>
  </Wrapper>
);

Day.propTypes = {
  children: PropTypes.node.isRequired,
};
