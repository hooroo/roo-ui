import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import BlockLink from '.';

describe('<BlockLink />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<BlockLink>Hello world</BlockLink>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
