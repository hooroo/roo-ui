import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Button from '.';

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Button>Hello world</Button>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('primary', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Button variant="primary">Hello world</Button>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('rounded', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Button rounded>Hello world</Button>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('block', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Button block>Hello world</Button>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
