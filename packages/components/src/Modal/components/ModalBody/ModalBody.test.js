import React from 'react';
import { axe } from 'jest-axe';
import { mountWithTheme, shallowWithTheme } from '@roo-ui/test-utils';
import { qantas as theme } from '@roo-ui/themes';
import ModalBody from './ModalBody';

describe('<ModalBody />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(
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
    expect(wrapper.find(ModalBody).name()).toBe('Modal.body');
  });

  it('renders correctly', () => {
    expect(shallowWithTheme(
      <ModalBody>
        Lorem ipsum dolor sit amet
      </ModalBody>,
      theme,
    )).toMatchSnapshot();
  });
});
