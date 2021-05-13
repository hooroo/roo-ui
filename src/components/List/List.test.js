import React from 'react';
import theme from 'theme';
import { axe, mountWithTheme } from 'testUtils';

import { List, ListItem } from '../';

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

  const render = () => mountWithTheme(tree(), theme);

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(render().html())).toHaveNoViolations();
  });

  it('renders an unordered list by default', () => {
    expect(render().find('ul')).toHaveLength(1);
    expect(render().find('ol')).toHaveLength(0);
  });

  describe('with ordered prop', () => {
    beforeEach(() => {
      props.ordered = true;
    });

    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    it('renders an ordered list', () => {
      expect(render().find('ol')).toHaveLength(1);
      expect(render().find('ul')).toHaveLength(0);
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
