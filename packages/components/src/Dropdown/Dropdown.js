import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import Downshift from 'downshift';
import partition from 'lodash/partition';
import { themeGet } from 'styled-system';
import { rem } from 'polished';

import { Box, NakedButton, Text } from '..';

const Wrapper = Box.extend`
  position: relative;
  display: inline-block;
`;

const Toggle = NakedButton.extend`
  &:hover {
    color: ${themeGet('colors.ui.link')};
  }

  &:focus {
    color: ${themeGet('colors.ui.linkHover')};
    outline: none;
  };
`;

const DropdownWrapper = Box.extend`
  position: absolute;
  min-width: ${rem('120px')};
  top: 0;
  left: 0;
  right: 0;
  background: ${themeGet('colors.white')};
  box-shadow: ${themeGet('shadows.heavy')};
  border-radius: ${themeGet('radii.default')};
`;

const Dropdown = ({ children, accessibilityLabel, ...props }) => (
  <Downshift {...props}>
    {({
      isOpen,
      getToggleButtonProps,
      highlightedIndex,
      getItemProps,
      getRootProps,
    }) => {
    const childrenArray = React.Children.toArray(children);
    const [items, toggle] = partition(childrenArray, child => child.type === Dropdown.item);

    return (
      <Wrapper {...getRootProps({ refKey: 'innerRef' })}>
        <Toggle
          {...getToggleButtonProps()}
        >
          {toggle}
          <Text hidden>{accessibilityLabel}</Text>
        </Toggle>

        {isOpen ? (
          <DropdownWrapper>
            {items.map((item, index) => React.cloneElement(item, getItemProps({
              item: index,
              key: index,
              highlighted: (highlightedIndex === index),
              ...item.props,
            })))}
          </DropdownWrapper>
        ) : null}
      </Wrapper>
    );
  }}
  </Downshift>
);

Dropdown.defaultProps = {
  children: null,
  accessibilityLabel: 'Toggle Dropdown',
};

Dropdown.propTypes = {
  children: PropTypes.node,
  accessibilityLabel: PropTypes.string,
};

Dropdown.item = NakedButton.extend`
  padding: ${themeGet('space.2')} ${themeGet('space.8')};
  color: ${themeGet('colors.grey.1')};
  width: 100%;
  display: block;
  text-align: left;
  text-decoration: none;

  ${props => props.highlighted && css`
    color: ${themeGet('colors.grey.0')};
    font-weight: ${themeGet('fontWeights.bold')};
  `}
`;

Dropdown.item.displayName = 'Dropdown.item';

Dropdown.item.defaultProps = {
  blacklist: ['highlighted'],
};

export default Dropdown;
