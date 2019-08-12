import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Box from '.';

describe('<Box />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Box>Hello world</Box>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
