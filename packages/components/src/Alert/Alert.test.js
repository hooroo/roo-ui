import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Alert from '.';

describe('<Alert />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Alert>Hello world</Alert>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('<Alert.success />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Alert.success>Hello world</Alert.success>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert.error />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Alert.error>Hello world</Alert.error>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert.info />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Alert.info>Hello world</Alert.info>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on close', () => {
    let onClose;

    beforeEach(() => {
      onClose = jest.fn();
      wrapper = shallowWithTheme(<Alert onClose={onClose}>Hello world</Alert>, theme);
      wrapper.dive().find('NakedButton').simulate('click');
    });

    it('calls #onClose', () => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});