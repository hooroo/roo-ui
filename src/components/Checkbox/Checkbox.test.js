import React from 'react';
import theme from 'theme';
import { mountWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Checkbox from './';

describe('<Checkbox />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(<Checkbox />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = mountWithTheme(
      <label htmlFor="radio">
        Label
        <Checkbox />
      </label>,
      theme,
    );
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('when checked', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(<Checkbox defaultChecked />, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(<Checkbox disabled />, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
