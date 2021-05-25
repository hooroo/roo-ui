import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import Truncate from './';

describe('<Truncate />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Truncate>Hello world</Truncate>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
