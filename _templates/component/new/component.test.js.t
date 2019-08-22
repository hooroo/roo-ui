---
to: <%= componentsRoot %>/<%= componentPath %>/<%= componentName %>.test.js
---
import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';
import <%= componentName %> from './';

describe('<<%= componentName %> />', () => {
  let props;

  const render = () => shallowWithTheme(<<%= componentName %> {...props} />, theme);

  beforeEach(() => {
    props = {
      children: 'Hello world!',
    };
  });

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(render().html())).toHaveNoViolations();
  });
});
