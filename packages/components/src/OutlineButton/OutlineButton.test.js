import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { mountWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import OutlineButton from '.';

describe('<OutlineButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(
      <OutlineButton>Click here</OutlineButton>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('primary', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <OutlineButton variant="primary">Hello world</OutlineButton>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('rounded', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <OutlineButton variant="rounded">Hello world</OutlineButton>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
