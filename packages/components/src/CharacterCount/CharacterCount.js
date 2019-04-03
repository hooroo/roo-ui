import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled, { css } from 'styled-components';
import { Text } from '..';
import { styledOmitProps } from '../styledOmitProps';

const CleanSpan = styledOmitProps('span', { omit: ['fontSize'] })``;
// const CleanSpan = styled('span')``;

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

const CharacterCount = styled(Text.withComponent(Base))`
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
