import React from 'react';
import theme from 'theme';
import { mountWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Radio from '.';

describe('<Radio />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(<Radio />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = mountWithTheme(
      <label htmlFor="radio">
        Label
        <Radio />
      </label>,
      theme,
    );
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('when checked', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(<Radio defaultChecked />, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(<Radio disabled />, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
