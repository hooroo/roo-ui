import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
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
    wrapper = shallowWithTheme(
      <label htmlFor="input">
        Label
        <Input />
      </label>,
      theme,
    );
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
