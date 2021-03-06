import styled from '@emotion/styled';
import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  style,
} from 'styled-system';
import Box from '../Box';

const flexFlow = style({
  prop: 'flexFlow',
  cssProperty: 'flexFlow',
});

const Flex = styled(Box)`
  ${alignItems} ${alignContent} ${justifyContent} ${flexWrap} ${flexDirection} ${flexFlow};
`;

Flex.propTypes = {
  ...Box.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...flexFlow.propTypes,
};

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
