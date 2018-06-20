import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Dropdown from '.';

describe('<Dropdown />', () => {
  let wrapper;

  beforeEach(() => {
    const component = (
      <Dropdown isOpen>
        Options
        <Dropdown.item bg="red" foo="bar">Edit</Dropdown.item>
        <Dropdown.item>Delete</Dropdown.item>
        <Dropdown.item>Unpublish</Dropdown.item>
        <Dropdown.item>Duplicate</Dropdown.item>
      </Dropdown>
    );
    wrapper = shallowWithTheme(component, theme).dive();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('adds props passed in to the <Dropdown.item />', () => {
    expect(wrapper.find(Dropdown.item).first().props()).toEqual(expect.objectContaining({
      bg: 'red',
      foo: 'bar',
    }));
  });
});
