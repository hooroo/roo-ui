import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
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
