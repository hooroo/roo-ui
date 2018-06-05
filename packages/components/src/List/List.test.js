import React from 'react';
import { axe } from 'jest-axe';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { List, ListItem } from '..';

describe('<List />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const tree = () => (
    <List {...props}>
      <ListItem>Hello Item 1</ListItem>
      <ListItem>Hello Item 2</ListItem>
      <ListItem>Hello Item 3</ListItem>
    </List>
  );

  const render = () => shallowWithTheme(tree(), theme).dive();

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(render().html())).toHaveNoViolations();
  });

  it('renders an unordered list by default', () => {
    expect(render().type()).toBe('ul');
  });

  describe('with ordered prop', () => {
    beforeEach(() => {
      props.ordered = true;
    });

    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    it('renders an ordered list', () => {
      expect(render().type()).toBe('ol');
    });
  });

  describe('with flush set', () => {
    beforeEach(() => {
      props.flush = true;
    });

    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });

  describe('with columns set', () => {
    beforeEach(() => {
      props.columns = 3;
    });

    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });

  describe('with responsive columns set', () => {
    beforeEach(() => {
      props.columns = [1, 2, 3];
    });

    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });
});
