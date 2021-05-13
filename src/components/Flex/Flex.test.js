import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';

import Flex from './';

describe('<Flex />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Flex>Hello world</Flex>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
