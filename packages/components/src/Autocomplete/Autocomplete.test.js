import React, { Fragment } from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { mountWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Autocomplete from '.';
import { Label, Input } from '..';

fdescribe('<Autocomplete />', () => {
  let wrapper;
  let props;

  const render = () => mountWithTheme(
    <Autocomplete {...props}>
      {({ getLabelProps, getInputProps }) => (
        <Fragment>
          <Label {...getLabelProps()}>Favourite dog</Label>
          <Input {...getInputProps()} />
        </Fragment>
      )}
    </Autocomplete>,
    theme,
  );

  beforeEach(() => {
    props = {
      items: ['Greyhound', 'Whippet', 'Borzoi'],
    };
    wrapper = render();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('does not render a <Menu />', () => {
    expect(wrapper.find('Menu')).toHaveLength(0);
  });

  it('does not render a <MenuItem />', () => {
    expect(wrapper.find('MenuItem')).toHaveLength(0);
  });

  describe('when open', () => {
    beforeEach(() => {
      props.isOpen = true;
      wrapper = render();
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    // NOTE: waiting on some improvements to Downshift that will land in 2.0.0:
    // https://github.com/paypal/downshift/pull/461
    // it('has no accessibility errors', async () => {
    //   expect(await axe(wrapper.html())).toHaveNoViolations();
    // });

    it('renders a <Menu />', () => {
      expect(wrapper.find('Menu')).toHaveLength(1);
    });

    it('renders a <MenuItem /> for each item', () => {
      expect(wrapper.find('MenuItem')).toHaveLength(3);
    });

    it('renders a <MenuItem /> for each item', () => {
      expect(wrapper.find('MenuItem')).toHaveLength(3);
    });
  });

  describe('when filterItems is set', () => {
    beforeEach(() => {
      props.filterItems = true;
      props.inputValue = 'i';
      props.isOpen = true;
      wrapper = render();
    });

    it('filters items by input value', () => {
      expect(wrapper.find('MenuItem')).toHaveLength(2);
      expect(wrapper.find('MenuItem').at(0).text()).toBe('Whippet');
      expect(wrapper.find('MenuItem').at(1).text()).toBe('Borzoi');
    });
  });

  describe('when filterItems is not set', () => {
    beforeEach(() => {
      props.filterItems = false;
      props.inputValue = 'i';
      props.isOpen = true;
      wrapper = render();
    });

    it('does not filter item', () => {
      expect(wrapper.find('MenuItem')).toHaveLength(3);
    });
  });

  describe('when restrictValue is set', () => {
    beforeEach(() => {
      props.restrictValue = true;
      wrapper = render();
      wrapper.find('input').simulate('change', { target: { value: 'Longboy' } });
      wrapper.find('input').simulate('keydown', { key: 'Escape' });
    });

    it('restricts input value to items', () => {
      expect(wrapper.find('input').instance().value).toBe('');
    });
  });

  describe('when restrictValue is not set', () => {
    beforeEach(() => {
      props.restrictValue = false;
      wrapper = render();
      wrapper.find('input').simulate('change', { target: { value: 'Longboy' } });
      wrapper.find('input').simulate('keydown', { key: 'Escape' });
    });

    it('does not restrict input value to items', () => {
      expect(wrapper.find('input').instance().value).toBe('Longboy');
    });
  });
});
