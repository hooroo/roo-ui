import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

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
