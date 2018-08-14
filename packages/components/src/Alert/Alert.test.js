import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Alert from '.';

describe('<Alert />', () => {
  let wrapper;

  const render = tree => shallowWithTheme(tree, theme).dive();

  beforeEach(() => {
    wrapper = render(<Alert>Hello world</Alert>);
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
