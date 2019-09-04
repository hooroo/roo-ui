import {
  space,
  layout,
  position,
  color,
  typography,
  shadow,
  border,
  flexbox,
  compose,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import styled from '@emotion/styled';
import omitProps from '../omitProps';

const styleProps = compose(
  space,
  layout,
  position,
  color,
  typography,
  shadow,
  border,
  flexbox,
);

const Box = styled('div', omitProps())(styleProps);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.shadow,
  ...propTypes.border,
  ...propTypes.flexbox,
};

export default Box;
