import React from 'react';
import tag from 'clean-tag';
import PropTypes from 'prop-types';
import { color, width, height } from 'styled-system';
import styled, { keyframes, css } from 'styled-components';
import Box from '../Box';

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const bounceDelay = keyframes`
  0%, 80%, 100% { transform: scale(0) }
  40% { transform: scale(1.0) }
`;

const Bouncers = styled(Box)`
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out both;
  ${props => css`
    animation-delay: ${props.delay};
  `}
`;

const Bouncer = styled(tag.div)`
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  border-radius: 100%;
  display: inline-block;

  ${color}
  ${width}
  ${height}
`;

const FirstBouncer = Bouncer.extend`
  animation-delay: -0.32s;
`;

const SecondBouncer = Bouncer.extend`
  animation-delay: -0.16s;
`;

const ThirdBouncer = Bouncer.extend`
  animation-delay: 0;
`;

const BounceLoader = props => (
  <Bouncers delay={props.delay}>
    <FirstBouncer bg={props.color} width={props.size} height={props.size} />
    <SecondBouncer bg={props.color} width={props.size} height={props.size} />
    <ThirdBouncer bg={props.color} width={props.size} height={props.size} />
  </Bouncers>
);

BounceLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delay: PropTypes.string,
};

BounceLoader.defaultProps = {
  color: 'grey.1',
  size: 18,
  delay: '0',
};

export default BounceLoader;
