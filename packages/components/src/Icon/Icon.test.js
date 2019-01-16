import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { mountWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Icon from '.';

describe('<Icon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(<Icon name="hotel" />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
