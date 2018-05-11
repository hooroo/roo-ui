import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Button from '.';

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Button>Hello world</Button>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('primary', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Button primary>Hello world</Button>, theme);
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
