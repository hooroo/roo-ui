import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
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
