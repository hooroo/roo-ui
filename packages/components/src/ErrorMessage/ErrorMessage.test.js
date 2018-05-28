import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import ErrorMessage from '.';

describe('<ErrorMessage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<ErrorMessage>An error occurred</ErrorMessage>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('arrowTop', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<ErrorMessage arrowTop>An error occurred</ErrorMessage>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('arrowRight', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<ErrorMessage arrowRight>An error occurred</ErrorMessage>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('arrowBottom', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<ErrorMessage arrowBottom>An error occurred</ErrorMessage>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('arrowLeft', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<ErrorMessage arrowLeft>An error occurred</ErrorMessage>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
