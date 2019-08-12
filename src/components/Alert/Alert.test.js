import React from 'react';
import theme from 'theme';
import { mountWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Alert from '.';

describe('<Alert />', () => {
  let wrapper;

  const render = tree => mountWithTheme(tree, theme);

  beforeEach(() => {
    wrapper = render(<Alert>Hello world</Alert>);
  });

  it('has expected displayName', () => {
    expect(Alert.displayName).toBe('Alert');
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('contained', () => {
    beforeEach(() => {
      wrapper = render(<Alert contained>Hello world</Alert>);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert.success />', () => {
    beforeEach(() => {
      wrapper = render(<Alert.success>Hello world</Alert.success>);
    });

    it('has expected displayName', () => {
      expect(Alert.success.displayName).toBe('Alert.success');
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert variant="success" />', () => {
    beforeEach(() => {
      wrapper = render(<Alert variant="success">Hello world</Alert>);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert.error />', () => {
    beforeEach(() => {
      wrapper = render(<Alert.error>Hello world</Alert.error>);
    });

    it('has expected displayName', () => {
      expect(Alert.error.displayName).toBe('Alert.error');
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert variant="error" />', () => {
    beforeEach(() => {
      wrapper = render(<Alert variant="error">Hello world</Alert>);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert.info />', () => {
    beforeEach(() => {
      wrapper = render(<Alert.info>Hello world</Alert.info>);
    });

    it('has expected displayName', () => {
      expect(Alert.info.displayName).toBe('Alert.info');
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Alert variant="info" />', () => {
    beforeEach(() => {
      wrapper = render(<Alert variant="info">Hello world</Alert>);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on close', () => {
    let onClose;

    beforeEach(() => {
      onClose = jest.fn();
      wrapper = render(<Alert onClose={onClose}>Hello world</Alert>);
      wrapper.find('NakedButton').simulate('click');
    });

    it('calls #onClose', () => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});
