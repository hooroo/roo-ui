import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme, mountWithTheme } from '@roo-ui/test-utils';

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
  const renderMount = () => mountWithTheme(tree(), theme);


  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('renders an unordered list by default', () => {
    expect(renderMount().find(List).getDOMNode().tagName).toBe('UL');
  });

  describe('with ordered prop', () => {
    beforeEach(() => {
      props = {
        ordered: true,
      };
    });

    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    it('renders an ordered list', () => {
      expect(renderMount().find(List).getDOMNode().tagName).toBe('OL');
    });
  });

  describe('with columns set', () => {
    beforeEach(() => {
      props = {
        columns: 3,
      };
    });

    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });

  describe('with responsive columns set', () => {
    beforeEach(() => {
      props = {
        columns: [1, 2, 3],
      };
    });

    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });
});
