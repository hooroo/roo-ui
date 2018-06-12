import React from 'react';
import PropTypes from 'prop-types';
import cleanElement from 'clean-element';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';

import { Text } from '..';

const CleanSpan = cleanElement('span');

CleanSpan.propTypes = {
  ...Text.propTypes,
};

const Base = ({ value, limit, ...props }) => (
  <CleanSpan {...props}>
    {limit - value.length}
  </CleanSpan>
);

Base.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  limit: PropTypes.number.isRequired,
};

const CharacterCount = Text.withComponent(Base).extend`
  ${props => props.value.length > props.limit && css`
    color: ${themeGet('colors.ui.error')};
  `};
`;

CharacterCount.defaultProps = {
  ...Text.defaultProps,
  fontSize: 'sm',
};

CharacterCount.displayName = 'CharacterCount';

export default CharacterCount;
