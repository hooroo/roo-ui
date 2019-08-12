import React from 'react';
import { mount } from 'enzyme';
import theme from 'theme';
import ThemeProvider from 'ThemeProvider';
import { axe } from 'jest-axe';

import Icon from '.';

describe('<Icon />', () => {
  let wrapper;
  let props;

  const render = () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Icon {...props} />
      </ThemeProvider>,
    ).find(Icon);
  };

  describe('when passed icon name in theme', () => {
    beforeEach(() => {
      props = { name: 'hotel' };
      render();
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('has no accessibility errors', async () => {
      expect(await axe(wrapper.html())).toHaveNoViolations();
    });
  });

  describe('when passed icon name not in theme', () => {
    let consoleSpy;

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      props = { name: '_def_not_in_theme' };
      render();
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });

    it('renders svg with null path', () => {
      expect(wrapper.find('svg path').prop('d')).toBe(null);
    });

    it('logs error to console', () => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Icon "_def_not_in_theme" not found in theme',
      );
    });
  });
});
