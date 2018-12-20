import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { mountWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Popover from '.';

jest.mock('popper.js', () => (class {
  constructor() {
    return {
      destroy: () => {},
      scheduleUpdate: () => {},
    };
  }
}));

describe('<Popover />', () => {
  const modifiers = { preventOverflow: { enabled: false } };

  let wrapper;

  beforeEach(() => {
    // Need to wrap in div until this is solved https://github.com/Pomax/react-onclickoutside/issues/271
    wrapper = mountWithTheme(
      <div>
        <Popover modifiers={modifiers}>
          <Popover.control>
            {({ openPopover, closePopover, isOpen }) => (
              <button disabled={isOpen} onClick={openPopover} onKeyDown={closePopover}>
                Open popover
              </button>
            )}
          </Popover.control>

          <p>Popover contents</p>
        </Popover>
      </div>,
      theme,
    );
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('when popover is closed', () => {
    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('does not render the <Popper />', () => {
      expect(wrapper.find('Popper')).toHaveLength(0);
      expect(wrapper.text()).not.toContain('Popover contents');
    });

    it('passes down isOpen false', () => {
      expect(wrapper.find('button').prop('disabled')).toEqual(false);
    });

    it('renders the <Popper /> when the button is clicked', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('Popper')).toHaveLength(1);
    });
  });

  describe('when popover is open', () => {
    beforeEach(() => {
      wrapper.find('button').simulate('click');
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('passed modifiers to <Popper />', () => {
      expect(wrapper.find('Popper').prop('modifiers')).toEqual(modifiers);
    });

    it('passes down isOpen true', () => {
      expect(wrapper.find('button').prop('disabled')).toEqual(true);
    });

    it('closes the <Popper /> on key down', () => {
      wrapper.find('button').simulate('keydown');
      expect(wrapper.find('Popper')).toHaveLength(0);
    });

    it('hides <Popper /> when an outside element is clicked', () => {
      wrapper.find(Popover).instance().getInstance().handleClickOutside();
      wrapper.update();
      expect(wrapper.find('Popper')).toHaveLength(0);
    });
  });
});
