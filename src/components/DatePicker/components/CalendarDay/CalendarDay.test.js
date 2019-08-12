import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';

import { CalendarDay, CalendarEmptyDay } from './CalendarDay';

describe('<CalendarDay />', () => {
  it('renders correctly', () => {
    expect(
      shallowWithTheme(<CalendarDay selected>21</CalendarDay>, theme),
    ).toMatchSnapshot();
  });
});

describe('<CalendarEmptyDay />', () => {
  it('renders correctly', () => {
    expect(
      shallowWithTheme(<CalendarEmptyDay>15</CalendarEmptyDay>, theme),
    ).toMatchSnapshot();
  });
});
