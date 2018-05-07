import { boxShadow, borderRadius } from 'styled-system';

import { Box } from '..';

const Card = Box.extend`
  ${boxShadow}
  ${borderRadius};
`;

Card.propTypes = {
  ...boxShadow.propTypes,
  ...borderRadius.propTypes,
};

Card.defaultProps = {
  boxShadow: 'default',
  borderRadius: 'default',
  bg: 'white',
  p: 4,
};

export default Card;
