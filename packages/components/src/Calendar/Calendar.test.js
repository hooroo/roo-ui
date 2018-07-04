import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Calendar from '.';

describe('<Calendar />', () => {
  let wrapper;
  const props = {
    initialMonth: new Date('2018-07-03'),
    onDateSelected: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallowWithTheme(<Calendar {...props} />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
