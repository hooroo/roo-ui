import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import { themeGet } from 'styled-system';

import { Container, NakedButton, Text, Flex, Box, Icon } from '../';

const alertFactory = defaultVariant => {
  const BaseAlert = withTheme(
    ({ children, onClose, contained, theme, variant, ...props }) => {
      const { icon, ...boxProps } = {
        ...themeGet(`alertStyles.${variant}`)({ theme }),
        ...props,
      };

      const Wrapper = contained ? Container : Box;

      return (
        <Box {...props} {...boxProps}>
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
    },
  );

  BaseAlert.displayName = `Alert${
    defaultVariant !== 'default' ? `.${defaultVariant}` : ''
  }`;
  BaseAlert.propTypes = {
    ...Box.propTypes,
    children: PropTypes.node.isRequired,
    icon: PropTypes.shape(Icon.propTypes),
    contained: PropTypes.bool,
    onClose: PropTypes.func,
    variant: PropTypes.string,
  };

  BaseAlert.defaultProps = {
    ...Box.defaultProps,
    variant: defaultVariant,
    mb: 3,
  };

  return BaseAlert;
};

const Alert = alertFactory('default');

Alert.info = alertFactory('info');

Alert.success = alertFactory('success');

Alert.error = alertFactory('error');

export default Alert;
