import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Flex from '.';

describe('<Flex />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Flex>Hello world</Flex>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
