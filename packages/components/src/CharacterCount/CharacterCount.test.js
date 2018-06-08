import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import CharacterCount from '.';

describe('<CharacterCount />', () => {
  let wrapper;
  let props;

  const render = () => shallowWithTheme(<CharacterCount {...props} />, theme).dive();

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
      expect(wrapper.prop('children')).toBe(53);
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
      expect(wrapper.prop('children')).toBe(-3);
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
      expect(wrapper.prop('children')).toBe(0);
    });
  });
});
