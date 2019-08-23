import React from 'react';
import theme from 'theme';
import { mountWithTheme } from 'testUtils';

import CalendarNav from './';

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
    expect(
      wrapper
        .find('Button')
        .first()
        .props(),
    ).toEqual(expect.objectContaining(props.prevProps));
  });

  it('passes props.nextProps to second <Button />', () => {
    expect(
      wrapper
        .find('Button')
        .last()
        .props(),
    ).toEqual(expect.objectContaining(props.nextProps));
  });
});
