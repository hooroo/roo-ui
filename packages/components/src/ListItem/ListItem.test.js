import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import ListItem from '.';

describe('<ListItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<ListItem>Hello List</ListItem>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
