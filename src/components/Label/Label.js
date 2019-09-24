import PropTypes from 'prop-types';
import { hideVisually } from 'polished';
import { textStyle, space } from 'styled-system';
import styled from '@emotion/styled';
import propTypes from '@styled-system/prop-types';

import omitProps from '../omitProps';

const Label = styled('label', omitProps(['hidden']))`
  display: block;
  width: 100%;

  ${textStyle}
  ${space}
  ${props => props.hidden && hideVisually()}
`;

Label.propTypes = {
  ...propTypes.space,
  hidden: PropTypes.bool,
};

Label.defaultProps = {
  textStyle: 'label',
  m: 0,
  mb: 3,
  hidden: false,
};

export default Label;
