import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Image from '.';

describe('<Image />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Image src="/example.jpg" />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
