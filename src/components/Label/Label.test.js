import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Label from '.';

describe('<Label />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Label>Hello world</Label>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('hidden', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Label hidden>Hello world</Label>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
