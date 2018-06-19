import React from 'react';
import TextMask from 'react-text-mask';
import cleanElement from 'clean-element';

import { Input } from '..';

const CleanInput = cleanElement('input');

CleanInput.propTypes = Input.propTypes;

const MaskedInput = Input.withComponent(TextMask);
MaskedInput.displayName = 'MaskedInput';
MaskedInput.defaultProps = {
  render: (ref, props) => (
    <CleanInput ref={ref} {...props} />
  ),
};

MaskedInput.time = MaskedInput.extend``;
MaskedInput.time.displayName = 'MaskedInput.time';
MaskedInput.time.defaultProps = {
  keepCharPositions: true,
  placeholderChar: '\u2000',
  mask: [/[0-2]/, /[0-9]/, ':', /[0-6]/, /[0-9]/, ' AEST'],
  placeholder: '00:00 AEST',
};

export default MaskedInput;
