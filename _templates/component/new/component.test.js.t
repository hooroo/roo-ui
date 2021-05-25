---
to: <%= componentsRoot %>/<%= componentPath %>/<%= componentName %>.test.js
---
import React from 'react';
import theme from 'theme';
import { axe, shallowWithTheme } from 'testUtils';
import <%= componentName %> from './';

describe('<<%= componentName %> />', () => {
  let props;
  let wrapper;

  const render = () => shallowWithTheme(<<%= componentName %> {...props} />, theme);

  beforeEach(() => {
    props = {
      children: 'Hello world!',
    };

    wrapper = render();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
