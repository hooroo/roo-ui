import { Box } from '..';

const Card = Box.extend``;

Card.defaultProps = {
  boxShadow: 'default',
  borderRadius: 'default',
  bg: 'white',
  p: 4,
};

Card.displayName = 'Card';

export default Card;
