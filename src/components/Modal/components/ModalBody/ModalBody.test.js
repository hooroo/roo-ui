import React from 'react';
import { axe } from 'jest-axe';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { qantas as theme } from '@roo-ui/themes';
import ModalBody from './ModalBody';

describe('<ModalBody />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <ModalBody>
        Lorem ipsum dolor sit amet
      </ModalBody>,
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
