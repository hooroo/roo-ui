import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import Text from './';

describe('<Text />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Text>Hello world</Text>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
