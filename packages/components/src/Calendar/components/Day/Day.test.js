import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { Day, EmptyDay } from '.';

describe('<EmptyDay />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<EmptyDay />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Day />', () => {
  let wrapper;
  const props = {
    selected: true,
    selectable: true,
  };

  beforeEach(() => {
    wrapper = shallowWithTheme(<Day {...props}>21</Day>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
