import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Link from './';

describe('<Link />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Link href="/">Hello world</Link>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
