import React from 'react';
import { axe } from 'jest-axe';
import { shallowWithTheme } from 'testUtils';
import theme from 'theme';
import ModalBody from './ModalBody';

describe('<ModalBody />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <ModalBody>Lorem ipsum dolor sit amet</ModalBody>,
      theme,
    );
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('has display name', () => {
    expect(ModalBody.displayName).toBe('Modal.body');
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
