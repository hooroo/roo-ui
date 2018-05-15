import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import PasswordInput from '.';

describe('<PasswordInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<PasswordInput />, theme).dive();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('on visibility toggle', () => {
    describe('when <input /> type is password', () => {
      beforeEach(() => {
        wrapper.find('PasswordInput__Toggle').simulate('click');
      });

      it('sets <input /> type to text', () => {
        expect(wrapper.update().find('PasswordInput__CleanInput').props())
          .toHaveProperty('type', 'text');
      });
    });

    describe('when <input /> type is text', () => {
      beforeEach(() => {
        wrapper.setState({ visible: true });
        wrapper.find('PasswordInput__Toggle').simulate('click');
      });

      it('sets <input /> type to password', () => {
        expect(wrapper.update().find('PasswordInput__CleanInput').props())
          .toHaveProperty('type', 'password');
      });
    });
  });
});
