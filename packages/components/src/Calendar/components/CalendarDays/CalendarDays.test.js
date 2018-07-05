import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { CalendarDay, CalendarEmptyDay, CalendarDays } from '.';

describe('<CalendarDays />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <CalendarDays>
        <CalendarEmptyDay />
        <CalendarDay>21</CalendarDay>
      </CalendarDays>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
