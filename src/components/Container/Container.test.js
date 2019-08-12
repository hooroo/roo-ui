import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Container from '.';

describe('<Container />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Container>Hello world</Container>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('with a responsive gutter', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Container gutter={[3, 6, 9, 12]}>Hello world</Container>,
        theme,
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
