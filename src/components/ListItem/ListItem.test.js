import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import ListItem from './';

describe('<ListItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<ListItem>Hello List</ListItem>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = shallowWithTheme(
      <ul>
        <ListItem>Hello List</ListItem>
      </ul>,
      theme,
    );
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
