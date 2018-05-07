import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Box from '.';

describe('<Box />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Box>Hello world</Box>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
