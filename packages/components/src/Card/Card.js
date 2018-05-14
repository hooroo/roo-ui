import {
  display,
  flexDirection,
  flexWrap,
} from 'styled-system';
import { Box } from '..';

const Card = Box.extend`
  ${display}
  ${flexDirection}
  ${flexWrap}
`;

Card.defaultProps = {
  boxShadow: 'default',
  borderRadius: 'default',
  bg: 'white',
  p: 4,
};

Card.propTypes = {
  ...Box.propTypes,
  ...display.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
};

export default Card;
