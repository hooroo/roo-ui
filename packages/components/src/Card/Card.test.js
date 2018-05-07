import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Card from '.';

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Card>Hello world</Card>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
