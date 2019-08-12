import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import ErrorMessage from '.';

describe('<ErrorMessage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <ErrorMessage>An error occurred</ErrorMessage>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('prop.arrow equals top', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <ErrorMessage arrow="top">An error occurred</ErrorMessage>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('prop.arrow equals right', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <ErrorMessage arrow="right">An error occurred</ErrorMessage>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('prop.arrow equals bottom', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <ErrorMessage arrow="bottom">An error occurred</ErrorMessage>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('prop.arrow equals left', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <ErrorMessage arrow="left">An error occurred</ErrorMessage>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
