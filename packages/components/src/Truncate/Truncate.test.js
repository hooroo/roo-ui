import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Truncate from '.';

describe('<Truncate />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Truncate>Hello world</Truncate>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
