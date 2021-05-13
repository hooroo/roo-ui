import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import BlockLink from './';

describe('<BlockLink />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<BlockLink>Hello world</BlockLink>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
