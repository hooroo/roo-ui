import React from 'react';
import cleanElement from 'clean-element';
import styled from 'styled-components';
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
`;

const Base = props => (
  <Wrapper>
    <CleanSelect {...props} />

    <IconWrapper>
      <Icon name="expandMore" size={24} mr={2} />
    </IconWrapper>
  </Wrapper>
);

const Select = Input.withComponent(Base).extend`
  border-radius: 0;
  padding-right: ${themeGet('space.8')};
`;

export default Select;
