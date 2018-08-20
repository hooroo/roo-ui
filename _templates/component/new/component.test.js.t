---
to: <%= componentsRoot %>/<%= componentPath %>/<%= componentName %>.test.js
---
import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';
import <%= componentName %> from '.';

describe('<<%= componentName %> />', () => {
  let props;

  const render = () => shallowWithTheme(<<%= componentName %> {...props} />, theme);

  beforeEach(() => {
    props = {
      children: '🔥 🔥 🔥',
    };
  });

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(render().html())).toHaveNoViolations();
  });
});
