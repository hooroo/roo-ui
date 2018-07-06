import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { CalendarDay, CalendarEmptyDay, CalendarDays } from '.';

describe('<CalendarDay />', () => {
  it('renders correctly', () => {
    expect(shallowWithTheme(<CalendarDay>21</CalendarDay>, theme)).toMatchSnapshot();
  });
});

describe('<CalendarEmptyDay />', () => {
  it('renders correctly', () => {
    expect(shallowWithTheme(<CalendarEmptyDay />, theme)).toMatchSnapshot();
  });
});

describe('<CalendarDays />', () => {
  it('renders correctly', () => {
    expect(shallowWithTheme(<CalendarDays>Day</CalendarDays>, theme)).toMatchSnapshot();
  });
});
