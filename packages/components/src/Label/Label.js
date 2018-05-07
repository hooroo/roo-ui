import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { space, fontSize, fontWeight, color } from 'styled-system';

const Label = styled.label`
  display: block;
  width: 100%;

  ${props => props.hidden && hideVisually()}

  ${space}
  ${color}
`;

Label.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  hidden: PropTypes.bool,
};

Label.defaultProps = {
  fontSize: 'xs',
  fontWeight: 'bold',
  color: 'grey.1',
  lineHeight: 'loose',
  m: 0,
  mb: 3,
  hidden: false,
};

export default Label;
