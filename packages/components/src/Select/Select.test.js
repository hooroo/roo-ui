import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Select from '.';

describe('<Select />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Select>Options</Select>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = shallowWithTheme(<label htmlFor="input">Label<Select /></label>, theme);
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
