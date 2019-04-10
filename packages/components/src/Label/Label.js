import PropTypes from 'prop-types';
import { hideVisually } from 'polished';
import { textStyle, space } from 'styled-system';
import styled, { VALID_STYLED_SYSTEM_PROPS } from '../styledOmitProps';

const Label = styled('label', { omit: [...VALID_STYLED_SYSTEM_PROPS, 'hidden'] })`
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
