import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Datepicker from '.';

describe('<Datepicker />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Datepicker />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
