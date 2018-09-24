import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Input from '.';

describe('<Input />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Input />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = shallowWithTheme(<label htmlFor="input">Label<Input /></label>, theme);
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('underline', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Input underline />, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
