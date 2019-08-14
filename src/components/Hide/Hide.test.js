import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Hide from './';

describe('<Hide />', () => {
  let wrapper;

  const testWithBreakpoints = breakpoints => {
    describe('no props', () => {
      beforeEach(() => {
        wrapper = shallowWithTheme(<Hide>Hello world</Hide>, {
          ...theme,
          breakpoints,
        });
      });

      it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('has no accessibility errors', async () => {
        expect(await axe(wrapper.html())).toHaveNoViolations();
      });
    });

    describe('xs', () => {
      beforeEach(() => {
        wrapper = shallowWithTheme(<Hide xs>Hello world</Hide>, {
          ...theme,
          breakpoints,
        });
      });

      it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('sm', () => {
      beforeEach(() => {
        wrapper = shallowWithTheme(<Hide sm>Hello world</Hide>, {
          ...theme,
          breakpoints,
        });
      });

      it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('md', () => {
      beforeEach(() => {
        wrapper = shallowWithTheme(<Hide md>Hello world</Hide>, {
          ...theme,
          breakpoints,
        });
      });

      it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('lg', () => {
      beforeEach(() => {
        wrapper = shallowWithTheme(<Hide lg>Hello world</Hide>, {
          ...theme,
          breakpoints,
        });
      });

      it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  };

  describe('with breakpoints in rems', () => {
    testWithBreakpoints(['40rem', '52rem', '64rem']);
  });

  describe('with breakpoints in px', () => {
    testWithBreakpoints(['768px', '1100px', '1280px']);
  });
});
