import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import BackgroundImage from './';

describe('<BackgroundImage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <BackgroundImage src="/example.jpg">Hello world</BackgroundImage>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
