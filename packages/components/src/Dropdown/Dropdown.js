import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import partition from 'lodash/partition';

import { Box, NakedButton, Text } from '..';

const Wrapper = Box.extend`
  position: relative;
`;

const DropdownWrapper = Box.extend`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;

const Dropdown = props => (
  <Downshift>
    {({
      isOpen,
      getToggleButtonProps,
      highlightedIndex,
      getItemProps,
      getRootProps,
    }) => {
    const [items, children] = partition(React.Children.toArray(props.children), child => child.type === Dropdown.item);
    return (
      <Wrapper {...getRootProps({ refKey: 'innerRef' })}>
        <NakedButton
          {...getToggleButtonProps()}
        >
          {children}
          <Text hidden>Toggle Dropdown</Text>
        </NakedButton>

        {isOpen ? (
          <DropdownWrapper>
            {items.map((item, index) => React.cloneElement(item, getItemProps({
              item: index,
              key: index,
              highlighted: (highlightedIndex === index),
            })))}
          </DropdownWrapper>
        ) : null}
      </Wrapper>
    );
  }}
  </Downshift>
);

Dropdown.item = Box.extend`
${props => props.highlighted && `
  background-color: red;
`}
`;

Dropdown.item.displayName = 'Dropdown.item';

Dropdown.defaultProps = {
  children: null,
};

Dropdown.propTypes = {
  children: PropTypes.node,
};

export default Dropdown;
