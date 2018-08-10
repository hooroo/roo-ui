import React from 'react';
import { axe } from 'jest-axe';
import { mountWithTheme } from '@roo-ui/test-utils';
import { qantas as theme } from '@roo-ui/themes';
import Modal from './Modal';

describe('<Modal />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(
      <Modal
        title="Test Modal"
        isOpen
        role="dialog"
        ariaHideApp={false}
      />,
      theme,
    );
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('has display name', () => {
    expect(wrapper.find(Modal).name()).toBe('Modal');
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
