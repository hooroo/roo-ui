import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { themeGet } from 'styled-system';

import { Icon, Input } from '..';
import omitProps from '../omitProps';

const StyledSelect = styled('select', omitProps(['color', 'fontSize']))``;

StyledSelect.propTypes = {
  ...Input.propTypes,
};

const Wrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0;
  pointer-events: none;

  ${props => props.disabled && css`
    opacity: ${themeGet('opacity.disabled')(props)};
  `}
`;

const Base = props => (
  <Wrapper>
    <StyledSelect {...props} />

    {!props.readOnly && (
      <IconWrapper disabled={props.disabled}>
        <Icon name="expandMore" size={24} mr={2} />
      </IconWrapper>
    )}
  </Wrapper>
);

Base.propTypes = Input.propTypes;

const Select = styled(Input)`
  border-radius: 0;
  padding-right: ${themeGet('space.8')};
  cursor: pointer;
`;

Select.defaultProps = {
  ...Select.defaultProps,
  as: Base,
};

export default Select;
