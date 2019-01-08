import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { mountWithTheme } from '@roo-ui/test-utils';

import CalendarNav from '.';

describe('<CalendarNav />', () => {
  let wrapper;

  const props = {
    prevProps: { onClick: jest.fn() },
    nextProps: { onClick: jest.fn() },
  };

  beforeEach(() => {
    wrapper = mountWithTheme(<CalendarNav {...props} />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('passes props.prevProps to first <Button />', () => {
    expect(wrapper.find('NakedButton').first().props()).toEqual(expect.objectContaining(props.prevProps));
  });

  it('passes props.nextProps to second <Button />', () => {
    expect(wrapper.find('NakedButton').last().props()).toEqual(expect.objectContaining(props.nextProps));
  });
});
