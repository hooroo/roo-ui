import React from 'react';
import { axe } from 'jest-axe';
import { mountWithTheme, shallowWithTheme } from '@roo-ui/test-utils';
import { qantas } from '@roo-ui/themes';
import ModalHeader from './ModalHeader';

describe('<ModalHeader />', () => {
  const theme = { alertStyles: qantas.alertStyles };
  let wrapper;

  describe('default', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <ModalHeader >
          Lorem ipsum dolor sit amet
        </ModalHeader>,
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
      expect(shallowWithTheme(
        <ModalHeader >
          Lorem ipsum dolor sit amet
        </ModalHeader>,
        theme,
      )).toMatchSnapshot();
    });
  });

  describe('variant = info', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <ModalHeader variant="info" >
          Lorem ipsum dolor sit amet
        </ModalHeader>,
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
      expect(shallowWithTheme(
        <ModalHeader variant="info" >
          Lorem ipsum dolor sit amet
        </ModalHeader>,
        theme,
      )).toMatchSnapshot();
    });
  });

  describe('variant = success', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <ModalHeader variant="success" >
          Lorem ipsum dolor sit amet
        </ModalHeader>,
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
      expect(shallowWithTheme(
        <ModalHeader variant="success" >
          Lorem ipsum dolor sit amet
        </ModalHeader>,
        theme,
      )).toMatchSnapshot();
    });
  });

  describe('variant = error', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(
        <ModalHeader variant="error" >
          Lorem ipsum dolor sit amet
        </ModalHeader>,
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
      expect(shallowWithTheme(
        <ModalHeader variant="error" >
          Lorem ipsum dolor sit amet
        </ModalHeader>,
        theme,
      )).toMatchSnapshot();
    });
  });
});
