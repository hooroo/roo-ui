import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Text from '.';

describe('<Text />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Text>Hello world</Text>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
