import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Hide from '.';

describe('<Hide />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Hide>Hello world</Hide>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('xs', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Hide xs>Hello world</Hide>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('sm', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Hide sm>Hello world</Hide>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('md', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Hide md>Hello world</Hide>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('lg', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Hide lg>Hello world</Hide>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
