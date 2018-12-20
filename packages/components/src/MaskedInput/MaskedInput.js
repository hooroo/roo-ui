import React from 'react';
import styled from 'styled-components';
import TextMask from 'react-text-mask';
import omit from 'lodash/omit';

import { Input } from '..';

const MaskedInput = Input.withComponent(TextMask);
MaskedInput.displayName = 'MaskedInput';

MaskedInput.defaultProps = {
  ...Input.defaultProps,
  render: (ref, { defaultValue, ...props }) => (
    <Input
      innerRef={ref}
      value={defaultValue}
      {...omit(props, Object.keys(Input.propTypes))}
    />
  ),
};

MaskedInput.time = styled(MaskedInput)``;
MaskedInput.time.displayName = 'MaskedInput.time';
MaskedInput.time.defaultProps = {
  ...MaskedInput.defaultProps,
  keepCharPositions: true,
  placeholderChar: '\u2000',
  mask: [/[0-2]/, /[0-9]/, ':', /[0-6]/, /[0-9]/, ' AEST'],
  placeholder: '00:00 AEST',
};

export default MaskedInput;
