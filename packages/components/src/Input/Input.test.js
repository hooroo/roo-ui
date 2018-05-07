import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Input from '.';

describe('<Input />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Input />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
