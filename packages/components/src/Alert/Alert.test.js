import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Alert from '.';

describe('<Alert />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <Alert>Hello world</Alert>,
      theme,
    ).dive();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('<Alert.success />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Alert.success>Hello world</Alert.success>,
        theme,
      ).dive();
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert.error />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Alert.error>Hello world</Alert.error>,
        theme,
      ).dive();
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert.info />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Alert.info>Hello world</Alert.info>,
        theme,
      ).dive();
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on close', () => {
    let onClose;

    beforeEach(() => {
      onClose = jest.fn();
      wrapper = shallowWithTheme(
        <Alert onClose={onClose}>Hello world</Alert>,
        theme,
      ).dive();
      wrapper.find('NakedButton').simulate('click');
    });

    it('calls #onClose', () => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});
