import PropTypes from 'prop-types';
import { hideVisually } from 'polished';
import { textStyle, space } from 'styled-system';
import styled from '../styledOmitProps';

const Label = styled('label', { omit: ['hidden'] })`
  display: block;
  width: 100%;

  ${props => props.hidden && hideVisually()}

  ${textStyle}
  ${space}
`;

Label.propTypes = {
  ...textStyle.propTypes,
  ...space.propTypes,
  hidden: PropTypes.bool,
};

Label.defaultProps = {
  textStyle: 'label',
  m: 0,
  mb: 3,
  hidden: false,
};

export default Label;
