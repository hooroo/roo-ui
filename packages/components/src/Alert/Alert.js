import React from 'react';
import PropTypes from 'prop-types';

import { Container, NakedButton, Text, Flex, Box, Icon } from '..';

const alertFactory = (defaultProps = {}) => {
  const BaseAlert = ({
    children,
    icon,
    onClose,
    contained,
    ...props
  }) => {
    const Wrapper = contained ? Container : Box;

    return (
      <Box {...props}>
        <Wrapper px={contained ? undefined : 4}>
          <Flex py={4}>
            {icon && (
              <Box pr={3}>
                <Icon {...icon} />
              </Box>
            )}

            <Text mb={0} textAlign="left">
              {children}
            </Text>

            {onClose && (
              <Box ml="auto" pl={3}>
                <NakedButton onClick={onClose}>
                  <Icon name="close" />
                </NakedButton>
              </Box>
            )}
          </Flex>
        </Wrapper>
      </Box>
    );
  };

  BaseAlert.displayName = 'Alert';
  BaseAlert.propTypes = {
    ...Box.propTypes,
    children: PropTypes.node.isRequired,
    icon: PropTypes.shape(Icon.propTypes),
    contained: PropTypes.bool,
    onClose: PropTypes.func,
  };

  BaseAlert.defaultProps = {
    ...Box.defaultProps,
    bg: 'greys.porcelain',
    mb: 3,
    ...defaultProps,
  };

  return BaseAlert;
};

const Alert = alertFactory();

Alert.info = alertFactory({
  bg: 'ui.infoBackground',
  icon: {
    name: 'info',
    color: 'greys.charcoal',
  },
});

Alert.success = alertFactory({
  bg: 'ui.successBackground',
  icon: {
    name: 'checkCircle',
    color: 'ui.success',
  },
});

Alert.error = alertFactory({
  bg: 'ui.errorBackground',
  icon: {
    name: 'warning',
    color: 'ui.error',
  },
});

export default Alert;
