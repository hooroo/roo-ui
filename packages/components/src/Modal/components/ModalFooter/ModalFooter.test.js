import React from 'react';
import { axe } from 'jest-axe';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { qantas as theme } from '@roo-ui/themes';
import ModalFooter from './ModalFooter';

describe('<ModalFooter />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <ModalFooter>
        Lorem ipsum dolor sit amet
      </ModalFooter>,
      theme,
    );
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('has display name', () => {
    expect(ModalFooter.displayName).toBe('Modal.footer');
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
