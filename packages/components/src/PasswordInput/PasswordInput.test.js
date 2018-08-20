import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import PasswordInput from '.';

describe('<PasswordInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<PasswordInput />, theme).dive();
  });

  it('has no accessibility errors', async () => {
    wrapper = shallowWithTheme(
      <label htmlFor="input">
        Label<PasswordInput id="input" />
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
      });

      it('sets <input /> type to text', () => {
        expect(wrapper
          .update()
          .find('PasswordInput__Input')
          .props()).toHaveProperty('type', 'text');
      });
    });
  });

  describe('when visibility is toggled', () => {
    beforeEach(() => {
      wrapper.setState({ visible: true }).update();
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('on visibility toggle click', () => {
      beforeEach(() => {
        wrapper.find('PasswordInput__Toggle').simulate('click');
      });

      it('sets <input /> type to password', () => {
        expect(wrapper
          .update()
          .find('PasswordInput__Input')
          .props()).toHaveProperty('type', 'password');
      });
    });
  });
});
