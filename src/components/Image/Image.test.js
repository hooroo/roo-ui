import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import Image from './';

describe('<Image />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Image src="/example.jpg" />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
