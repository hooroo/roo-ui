import styled from 'styled-components';
import { Box } from '..';

const Card = styled(Box)``;

Card.defaultProps = {
  boxShadow: 'default',
  borderRadius: 'default',
  bg: 'white',
  p: 4,
};

export default Card;
