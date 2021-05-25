import React from 'react';
import { axe, mountWithTheme } from 'testUtils';
import theme from 'theme';
import ReactModal from 'react-modal';
import Modal from './Modal';

describe('<Modal />', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactModal.setAppElement(root);

  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(
      <Modal
        title="Test Modal"
        aria={{
          label: 'Test Aria',
        }}
        isOpen
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
