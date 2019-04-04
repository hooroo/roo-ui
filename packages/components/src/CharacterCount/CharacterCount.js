import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled, { css } from 'styled-components';
import { Text } from '..';
import styledOmitProps from '../styledOmitProps';

const StyledSpan = styledOmitProps('span', { omit: ['fontSize'] })``;

StyledSpan.propTypes = {
  ...Text.propTypes,
};

const Base = ({ value, limit, ...props }) => (
  <StyledSpan {...props}>
    {limit - value.length}
  </StyledSpan>
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
