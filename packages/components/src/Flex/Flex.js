import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system';
import { Box } from '..';

const Flex = Box.extend`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`;

Flex.propTypes = {
  ...Box.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
};

export default Flex;
