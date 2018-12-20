import styled from 'styled-components';
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
  display: flex;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${flexFlow}
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

export default Flex;
