import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { hideVisually } from 'polished';

import { Box, NakedButton, Icon, Text } from '..';

const Dropdown = ({ items, children }) => (
  <Downshift>
    {({
      isOpen,
      toggleMenu,
      selectedItem,
      getRootProps,
    }) => (
      <Box {...getRootProps({ refKey: 'innerRef' })}>
        {children}

        <NakedButton
          type="button"
          onClick={toggleMenu}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <Icon name="keyboardArrowDown" />
          <Text>Toggle Dropdown</Text>
        </NakedButton>

        {isOpen ? (
          <Box>
            {items.map(item => (
              <NakedButton
                key={item}
                selected={item === selectedItem}
                style={{ cursor: 'pointer' }}
              >
                {item}
              </NakedButton>
            ))}
          </Box>
        ) : null}
      </Box>
    )}
  </Downshift>
);

Dropdown.defaultProps = {
  children: null,
};

Dropdown.propTypes = {
  items: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Dropdown;
