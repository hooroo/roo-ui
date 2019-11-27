import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';
import { color } from '@styled-system/color';
import { layout } from '@styled-system/layout';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import Box from '../Box';

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0) }
  40% { transform: scale(1.0) }
`;

const parseDelay = delay => {
  if (typeof delay === 'number') {
    return `${delay}ms`;
  }
  return delay;
};

const Bouncers = styled(Box)`
  animation: ${fadeIn} ${themeGet('transitions.default')} both;
  animation-delay: ${props => props.delay};
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-around;

  ${layout};
`;

const Bouncer = styled.div`
  animation: ${bounce} 1.4s infinite ease-in-out both;
  border-radius: 100%;
  display: inline-block;

  &:nth-of-type(1) {
    animation-delay: -0.32s;
  }
  &:nth-of-type(2) {
    animation-delay: -0.16s;
  }
  &:nth-of-type(3) {
    animation-delay: 0;
  }

  ${color} ${layout};
`;

const LoadingIndicator = props => {
  const delay = parseDelay(props.delay);

  return (
    <Bouncers delay={delay} width={props.size * 4}>
      <Bouncer bg={props.color} size={props.size} />
      <Bouncer bg={props.color} size={props.size} />
      <Bouncer bg={props.color} size={props.size} />
    </Bouncers>
  );
};

LoadingIndicator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LoadingIndicator.defaultProps = {
  color: 'greys.steel',
  size: 18,
  delay: 0,
};

export default LoadingIndicator;
