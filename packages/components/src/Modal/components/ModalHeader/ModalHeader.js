import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import { themeGet } from 'styled-system';

import { Text, Flex, Box, Icon } from '../../..';

const ModalHeader = withTheme(({
  theme,
  variant,
  children,
  ...props
}) => {
  const { icon, bg } = {
    ...themeGet(`alertStyles.${variant}`)({ theme }),
    ...props,
  };

  return (
    <Box {...props} bg={bg}>
      <Flex px={11} py={9} justifyContent="center" alignItems="center">
        {icon && (
          <Box pr={3}>
            <Icon {...icon} />
          </Box>
        )}
        <Text mb={0} fontSize="xl" textAlign="left" fontWeight="bold">
          {children}
        </Text>
      </Flex>
    </Box>
  );
});

ModalHeader.displayName = 'Modal.header';
ModalHeader.defaultProps = {
  variant: 'default',
};

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.shape(Icon.propTypes),
  variant: PropTypes.string,
  ...Box.propTypes,
};

export default ModalHeader;
