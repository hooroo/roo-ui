import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { CalendarDay, CalendarEmptyDay, CalendarDays } from '.';

describe('Calendar days', () => {
  it('renders <CalendarDay /> correctly', () => {
    expect(shallowWithTheme(<CalendarDay>21</CalendarDay>, theme)).toMatchSnapshot();
  });

  it('renders <CalendarEmptyDay /> correctly', () => {
    expect(shallowWithTheme(<CalendarEmptyDay />, theme)).toMatchSnapshot();
  });

  it('renders <CalendarDays /> correctly', () => {
    expect(shallowWithTheme(<CalendarDays>Day</CalendarDays>, theme)).toMatchSnapshot();
  });
});
