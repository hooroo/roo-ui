import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import Textarea from './';

describe('<Textarea />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Textarea>Hello World</Textarea>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = shallowWithTheme(
      <label htmlFor="input">
        Label
        <Textarea />
      </label>,
      theme,
    );
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
