import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Dropdown from '.';

describe('<Dropdown />', () => {
  const props = {
    isOpen: false,
  };

  const render = () => shallowWithTheme(
    <Dropdown {...props}>
      Options
      <Dropdown.item id="foo" foo="bar">Edit</Dropdown.item>
      <Dropdown.item>Delete</Dropdown.item>
      <Dropdown.item>Unpublish</Dropdown.item>
      <Dropdown.item>Duplicate</Dropdown.item>
    </Dropdown>,
    theme,
  ).dive();

  it('renders correctly when closed', () => {
    expect(render()).toMatchSnapshot();
  });

  it('renders correctly when open', () => {
    props.isOpen = true;
    expect(render()).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(render().html())).toHaveNoViolations();
  });

  it('adds props passed in to the <Dropdown.item />', () => {
    props.isOpen = true;
    expect(render().find(Dropdown.item).first().props()).toEqual(expect.objectContaining({
      id: 'foo',
      foo: 'bar',
    }));
  });
});
