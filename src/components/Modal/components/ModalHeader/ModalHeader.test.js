import React from 'react';
import { axe, mountWithTheme, shallowWithTheme } from 'testUtils';
import theme from 'theme';
import ModalHeader from './ModalHeader';

describe('<ModalHeader />', () => {
  let wrapper;

  it('has display name', () => {
    expect(ModalHeader.displayName).toBe('Modal.header');
  });

  describe('default', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <ModalHeader>Lorem ipsum dolor sit amet</ModalHeader>,
        theme,
      );
    });

    it('has no accessibility errors', async () => {
      expect(await axe(wrapper.html())).toHaveNoViolations();
    });

    it('have display name', () => {
      expect(wrapper.find(ModalHeader).name()).toBe('Modal.header');
    });

    it('renders correctly', () => {
      expect(
        shallowWithTheme(
          <ModalHeader>Lorem ipsum dolor sit amet</ModalHeader>,
          theme,
        ),
      ).toMatchSnapshot();
    });
  });

  describe('variant = info', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <ModalHeader variant="info">Lorem ipsum dolor sit amet</ModalHeader>,
        theme,
      );
    });

    it('has no accessibility errors', async () => {
      expect(await axe(wrapper.html())).toHaveNoViolations();
    });

    it('have display name', () => {
      expect(wrapper.find(ModalHeader).name()).toBe('Modal.header');
    });

    it('renders correctly', () => {
      expect(
        shallowWithTheme(
          <ModalHeader variant="info">Lorem ipsum dolor sit amet</ModalHeader>,
          theme,
        ),
      ).toMatchSnapshot();
    });
  });

  describe('variant = success', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <ModalHeader variant="success">Lorem ipsum dolor sit amet</ModalHeader>,
        theme,
      );
    });

    it('has no accessibility errors', async () => {
      expect(await axe(wrapper.html())).toHaveNoViolations();
    });

    it('have display name', () => {
      expect(wrapper.find(ModalHeader).name()).toBe('Modal.header');
    });

    it('renders correctly', () => {
      expect(
        shallowWithTheme(
          <ModalHeader variant="success">
            Lorem ipsum dolor sit amet
          </ModalHeader>,
          theme,
        ),
      ).toMatchSnapshot();
    });
  });

  describe('variant = error', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <ModalHeader variant="error">Lorem ipsum dolor sit amet</ModalHeader>,
        theme,
      );
    });

    it('has no accessibility errors', async () => {
      expect(await axe(wrapper.html())).toHaveNoViolations();
    });

    it('have display name', () => {
      expect(wrapper.find(ModalHeader).name()).toBe('Modal.header');
    });

    it('renders correctly', () => {
      expect(
        shallowWithTheme(
          <ModalHeader variant="error">Lorem ipsum dolor sit amet</ModalHeader>,
          theme,
        ),
      ).toMatchSnapshot();
    });
  });
});
