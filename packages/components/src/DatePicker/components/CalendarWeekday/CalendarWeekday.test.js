import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import CalendarWeekday from '.';

describe('<CalendarWeekday />', () => {
  it('renders correctly', () => {
    expect(shallowWithTheme(<CalendarWeekday>Tuesday</CalendarWeekday>, theme)).toMatchSnapshot();
  });
});
