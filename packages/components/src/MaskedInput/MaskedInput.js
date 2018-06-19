import React from 'react';
import TextMask from 'react-text-mask';
import cleanElement from 'clean-element';

import { Input } from '..';

const CleanInput = cleanElement('input');

CleanInput.propTypes = {
  ...Input.propTypes,
};

const MaskedInput = Input.withComponent(TextMask);
MaskedInput.displayName = 'MaskedInput';
MaskedInput.defaultProps = {
  ...Input.defaultProps,
  render: (ref, { defaultValue, ...props }) => (
    <CleanInput
      ref={ref}
      value={defaultValue}
      {...props}
    />
  ),
};

MaskedInput.time = MaskedInput.extend``;
MaskedInput.time.displayName = 'MaskedInput.time';
MaskedInput.time.defaultProps = {
  ...MaskedInput.defaultProps,
  keepCharPositions: true,
  placeholderChar: '\u2001',
  mask: [/[0-2]/, /[0-9]/, ':', /[0-6]/, /[0-9]/, ' AEST'],
  placeholder: '00:00 AEST',
};

export default MaskedInput;
