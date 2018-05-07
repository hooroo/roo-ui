import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import OutlineButton from '.';

describe('<OutlineButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <OutlineButton>Hello world</OutlineButton>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('primary', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <OutlineButton primary>Hello world</OutlineButton>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('rounded', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <OutlineButton rounded>Hello world</OutlineButton>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
