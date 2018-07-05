import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import CalendarMonth from '.';

describe('<Nav />', () => {
  let wrapper;
  const props = {
    month: 'Jul',
    year: 2018,
  };

  beforeEach(() => {
    wrapper = shallowWithTheme(<CalendarMonth {...props}>Days</CalendarMonth>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
