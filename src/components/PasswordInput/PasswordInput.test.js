import React from 'react';
import theme from 'theme';
import { mountWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import PasswordInput from '.';

describe('<PasswordInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(<PasswordInput />, theme);
  });

  it('has no accessibility errors', async () => {
    wrapper = mountWithTheme(
      <label htmlFor="input">
        Label
        <PasswordInput id="input" />
      </label>,
      theme,
    );
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('when visibility is not toggled', () => {
    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('on visibility toggle click', () => {
      beforeEach(() => {
        wrapper.find('PasswordInput__Toggle').simulate('click');
        wrapper.update();
      });

      it('sets <input /> type to text', () => {
        expect(wrapper.find('PasswordInput__Input').props()).toHaveProperty(
          'type',
          'text',
        );
      });
    });
  });

  describe('when visibility is toggled', () => {
    beforeEach(() => {
      wrapper.find('PasswordInput__Toggle').simulate('click');
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('on visibility toggle click', () => {
      beforeEach(() => {
        wrapper.find('PasswordInput__Toggle').simulate('click');
      });

      it('sets <input /> type to password', () => {
        expect(
          wrapper
            .update()
            .find('PasswordInput__Input')
            .props(),
        ).toHaveProperty('type', 'password');
      });
    });
  });
});
