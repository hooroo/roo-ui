import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { CalendarDay, CalendarEmptyDay } from '.';

describe('<CalendarDay />', () => {
  it('renders correctly', () => {
    expect(shallowWithTheme(<CalendarDay selected>21</CalendarDay>, theme)).toMatchSnapshot();
  });
});

describe('<CalendarEmptyDay />', () => {
  it('renders correctly', () => {
    expect(shallowWithTheme(<CalendarEmptyDay>15</CalendarEmptyDay>, theme)).toMatchSnapshot();
  });
});
