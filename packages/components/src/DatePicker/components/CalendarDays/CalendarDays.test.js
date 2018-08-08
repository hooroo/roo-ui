import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import CalendarDays from '.';

describe('<CalendarDays />', () => {
  it('renders correctly', () => {
    const component = <CalendarDays selected selectable>Day</CalendarDays>;
    expect(shallowWithTheme(component, theme)).toMatchSnapshot();
  });
});
