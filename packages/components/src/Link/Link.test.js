import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Link from '.';

describe('<Link />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Link href="/">Hello world</Link>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
