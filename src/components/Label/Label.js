import PropTypes from 'prop-types';
import { hideVisually } from 'polished';
import { textStyle, space, display, width } from 'styled-system';
import styled from '@emotion/styled';

import omitProps from '../omitProps';

const Label = styled('label', omitProps(['hidden']))`
  ${props => props.hidden && hideVisually()}
  ${display}
  ${width}
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
  display: 'block',
  width: '100%',
  m: 0,
  mb: 3,
  hidden: false,
};

export default Label;
