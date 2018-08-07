import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import CalendarMonth from '.';

describe('<CalendarMonth />', () => {
  let wrapper;
  const props = {
    monthName: 'Jul',
    month: 7,
    year: 2018,
    stacked: true,
    weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  };

  beforeEach(() => {
    wrapper = shallowWithTheme(<CalendarMonth {...props}>Days</CalendarMonth>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('<CalendarWeekdays />', () => {
    it('renders CalendarWeekdays', () => {
      expect(wrapper.find('CalendarWeekdays').prop('month')).toEqual(props.month);
      expect(wrapper.find('CalendarWeekdays').prop('year')).toEqual(props.year);
      expect(wrapper.find('CalendarWeekdays').prop('weekdayNames')).toEqual(props.weekdayNames);
    });
  });
});
