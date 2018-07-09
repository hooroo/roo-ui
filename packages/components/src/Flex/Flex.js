import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system';
import Box from '../Box';

const Flex = Box.extend`
  display: flex;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`;

Flex.propTypes = {
  ...Box.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
};

export default Flex;
