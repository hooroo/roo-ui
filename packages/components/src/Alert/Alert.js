import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';

import { Container, NakedButton, Text, Flex, Box, Icon } from '..';

const alertFactory = (defaultType) => {
  const BaseAlert = withTheme(({
    children,
    onClose,
    contained,
    theme,
    type,
    ...props
  }) => {
    const { icon, bg } = {
      ...themeGet(`alertStyles.${type}`)({ theme }),
      ...props,
    };

    const Wrapper = contained ? Container : Box;

    return (
      <Box {...props} bg={bg} >
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
  });

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
    type: defaultType,
    mb: 3,
  };

  return BaseAlert;
};

const Alert = alertFactory('default');

Alert.info = alertFactory('info');

Alert.success = alertFactory('success');

Alert.error = alertFactory('error');

export default Alert;
