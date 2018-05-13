import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Heading from '.';

describe('<Heading />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Heading>Hello world</Heading>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('<Heading.h1 />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Heading.h1>Hello world</Heading.h1>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Heading.h2 />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Heading.h2>Hello world</Heading.h2>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Heading.h3 />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Heading.h3>Hello world</Heading.h3>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Heading.h4 />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Heading.h4>Hello world</Heading.h4>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Heading.h5 />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Heading.h5>Hello world</Heading.h5>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Heading.h6 />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Heading.h6>Hello world</Heading.h6>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
