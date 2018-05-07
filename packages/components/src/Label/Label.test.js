import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Label from '.';

describe('<Label />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Label>Hello world</Label>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
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
