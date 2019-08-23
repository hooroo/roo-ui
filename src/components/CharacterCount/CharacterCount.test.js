import React from 'react';
import theme from 'theme';
import { mountWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import CharacterCount from './';

describe('<CharacterCount />', () => {
  let wrapper;
  let props;

  const render = () => mountWithTheme(<CharacterCount {...props} />, theme);

  beforeEach(() => {
    props = {
      value: 'Hello world',
      limit: 64,
    };
    wrapper = render();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('when value length is less than limit', () => {
    it('render remaining count', () => {
      expect(wrapper.text()).toBe('53');
    });
  });

  describe('when value length is greater than limit', () => {
    beforeEach(() => {
      props = {
        value: 'Hello world',
        limit: 8,
      };
      wrapper = render();
    });

    it('render a negative count', () => {
      expect(wrapper.text()).toBe('-3');
    });
  });

  describe('when value length is exactly the limit', () => {
    beforeEach(() => {
      props = {
        value: 'Hello world',
        limit: 11,
      };
      wrapper = render();
    });

    it('render zero', () => {
      expect(wrapper.text()).toBe('0');
    });
  });
});
