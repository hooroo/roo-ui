import React from 'react';
import cleanElement from 'clean-element';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';

import { Icon, Input } from '..';

const CleanSelect = cleanElement('select');

CleanSelect.propTypes = {
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
    opacity: 0.7;
  `}
`;

const Base = props => (
  <Wrapper>
    <CleanSelect {...props} />

    {!props.readOnly && (
      <IconWrapper disabled={props.disabled}>
        <Icon name="expandMore" size={24} mr={2} />
      </IconWrapper>
    )}
  </Wrapper>
);

Base.propTypes = Input.propTypes;

const Select = Input.extend`
  border-radius: 0;
  padding-right: ${themeGet('space.8')};
`;

Select.defaultProps = {
  ...Select.defaultProps,
  is: Base,
};

export default Select;
