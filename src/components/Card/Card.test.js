import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import Card from './';

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Card>Hello world</Card>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
