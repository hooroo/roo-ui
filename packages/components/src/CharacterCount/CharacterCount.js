import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from '@emotion/core';
import { Text } from '..';
import styled from '../styledOmitProps';

const CharacterCountText = styled(Text)`
  ${props => props.value.length > props.limit && css`
    color: ${themeGet('colors.ui.error')(props)};
  `};
`;

const CharacterCount = props => (
  <CharacterCountText {...props}>
    {props.limit - props.value.length}
  </CharacterCountText>
);

CharacterCount.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  limit: PropTypes.number.isRequired,
};

CharacterCount.defaultProps = {
  ...Text.defaultProps,
  fontSize: 'sm',
};

export default CharacterCount;
