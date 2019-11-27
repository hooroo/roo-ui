import PropTypes from 'prop-types';
import { hideVisually } from 'polished';
import { textStyle } from '@styled-system/variant';
import { space } from '@styled-system/space';
import propTypes from '@styled-system/prop-types';
import styled from '@emotion/styled';

import omitProps from '../omitProps';

const Label = styled('label', omitProps(['hidden']))`
  display: block;
  width: 100%;

  ${props => props.hidden && hideVisually()} ${textStyle} ${space};
`;

Label.propTypes = {
  ...propTypes.textStyle,
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
