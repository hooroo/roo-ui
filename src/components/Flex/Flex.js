import styled from '@emotion/styled';
import { style } from 'styled-system';
import { flexbox } from '@styled-system/flexbox';
import propTypes from '@styled-system/prop-types';
import Box from '../Box';

const flexFlow = style({
  prop: 'flexFlow',
  cssProperty: 'flexFlow',
});

const Flex = styled(Box)`
  display: flex;
  ${flexbox} ${flexFlow};
`;

Flex.propTypes = {
  ...Box.propTypes,
  ...propTypes.alignItems,
  ...propTypes.alignContent,
  ...propTypes.justifyContent,
  ...propTypes.flexWrap,
  ...propTypes.flexDirection,
  ...propTypes.flexFlow,
};

export default Flex;
