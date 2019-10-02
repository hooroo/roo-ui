import styled from '@emotion/styled';
import {
  space,
  layout,
  position,
  color,
  typography,
  shadow,
  border,
  flexbox,
  system,
  compose,
} from 'styled-system';
import propTypes, { propType } from '@styled-system/prop-types';

const customProps = system({
  flexFlow: true,
});

const styleProps = compose(
  space,
  layout,
  position,
  color,
  typography,
  shadow,
  border,
  flexbox,
  customProps,
);

const Flex = styled('div')`
  display: flex;
  ${styleProps};
`;

Flex.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.shadow,
  ...propTypes.border,
  ...propTypes.flexbox,
  flexFlow: propType,
};

export default Flex;
