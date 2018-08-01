import React from 'react';
import PropTypes from 'prop-types';
import cleanElement from 'clean-element';

import { Container, NakedButton, Text, Flex, Box, Icon } from '..';

const CleanDiv = cleanElement('div');
CleanDiv.propTypes = Box.propTypes;

const Base = ({
  children,
  icon,
  onClose,
  contained,
  ...props
}) => {
  const Wrapper = contained ? Container : Box;

  return (
    <CleanDiv {...props}>
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
    </CleanDiv>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.shape(Icon.propTypes),
  contained: PropTypes.bool,
  onClose: PropTypes.func,
};

Base.defaultProps = {
  contained: false,
  icon: null,
  onClose: null,
};

const Alert = Box.withComponent(Base);
Alert.defaultProps = {
  ...Box.defaultProps,
  bg: 'greys.porcelain',
  mb: 3,
};

Alert.info = Alert.extend``;
Alert.info.displayName = 'Alert';
Alert.info.defaultProps = {
  ...Alert.defaultProps,
  bg: 'ui.infoBackground',
  icon: {
    name: 'info',
    color: 'greys.charcoal',
  },
};

Alert.success = Alert.extend``;
Alert.success.displayName = 'Alert';
Alert.success.defaultProps = {
  ...Alert.defaultProps,
  bg: 'ui.successBackground',
  icon: {
    name: 'checkCircle',
    color: 'ui.success',
  },
};

Alert.error = Alert.extend``;
Alert.error.displayName = 'Alert';
Alert.error.defaultProps = {
  ...Alert.defaultProps,
  bg: 'ui.errorBackground',
  icon: {
    name: 'warning',
    color: 'ui.error',
  },
};

export default Alert;
