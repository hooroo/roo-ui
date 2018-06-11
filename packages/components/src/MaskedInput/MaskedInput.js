import TextMask from 'react-text-mask';

import { Input } from '..';

const MaskedInput = Input.withComponent(TextMask);
MaskedInput.displayName = 'MaskedInput';

MaskedInput.time = MaskedInput.extend``;
MaskedInput.time.displayName = 'MaskedInput.time';
MaskedInput.time.defaultProps = {
  ...MaskedInput.defaultProps,
  guide: false,
  keepCharPositions: true,
  mask: [/[0-2]/, /[0-9]/, ':', /[0-6]/, /[0-9]/],
  placeholder: '00:00',
};

export default MaskedInput;
