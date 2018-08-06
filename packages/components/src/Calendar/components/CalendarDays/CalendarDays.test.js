import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { CalendarDay, CalendarEmptyDay, CalendarDays } from '.';

describe('<CalendarDay />', () => {
  it('renders correctly', () => {
    const component = <CalendarDay selected selectable>21</CalendarDay>;
    expect(shallowWithTheme(component, theme)).toMatchSnapshot();
  });
});

describe('<CalendarEmptyDay />', () => {
  it('renders correctly', () => {
    const component = <CalendarEmptyDay />;
    expect(shallowWithTheme(component, theme)).toMatchSnapshot();
  });
});

describe('<CalendarDays />', () => {
  it('renders correctly', () => {
    const component = <CalendarDays selected selectable>Day</CalendarDays>;
    expect(shallowWithTheme(component, theme)).toMatchSnapshot();
  });
});
