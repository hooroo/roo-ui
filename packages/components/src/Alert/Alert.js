import React from 'react';
import PropTypes from 'prop-types';
import cleanElement from 'clean-element';

import { Container, NakedButton, Text, Flex, Box, Icon } from '..';

const CleanDiv = cleanElement('div');

const Base = ({
  children,
  icon,
  onClose,
  ...props
}) => (
  <CleanDiv {...props}>
    <Container>
      <Flex py={4}>
        {icon && (
          <Box pr={1} pl={4}>
            <Icon {...icon} />
          </Box>
        )}

        <Text mb={0} px={2} textAlign="left">
          {children}
        </Text>

        {onClose && (
          <Box ml="auto" p={1} pr={4}>
            <NakedButton onClick={onClose}>
              <Icon name="close" />
            </NakedButton>
          </Box>
        )}
      </Flex>
    </Container>
  </CleanDiv>
);

Base.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.shape(Icon.propTypes),
  onClose: PropTypes.func,
};

Base.defaultProps = {
  icon: null,
  onClose: null,
};

const Alert = Box.withComponent(Base);
Alert.defaultProps = {
  ...Box.defaultProps,
  bg: 'grey.3',
  mb: 3,
};

Alert.info = Alert.extend``;
Alert.info.defaultProps = {
  ...Alert.defaultProps,
  bg: 'ui.infoBackground',
  icon: {
    name: 'info',
    color: 'ui.info',
  },
};

Alert.success = Alert.extend``;
Alert.success.defaultProps = {
  ...Alert.defaultProps,
  bg: 'ui.successBackground',
  icon: {
    name: 'checkCircle',
    color: 'ui.success',
  },
};

Alert.error = Alert.extend``;
Alert.error.defaultProps = {
  ...Alert.defaultProps,
  bg: 'ui.errorBackground',
  icon: {
    name: 'warning',
    color: 'ui.error',
  },
};

Alert.displayName = 'Alert';

export default Alert;
