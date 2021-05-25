import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import ExternalLink from './';

describe('<ExternalLink />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<ExternalLink>Hello world</ExternalLink>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
