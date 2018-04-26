import React from 'react';
import { shallow } from 'enzyme';

import { Icon } from '.';

describe('<Icon />', () => {
  let wrapper;
  const iconPath = 'M12.272 25.036l-8.749-8.49L0 20.026 12.272 32 36 8.482 32.474 5z';

  it('renders correctly', () => {
    expect(shallow(<Icon path={iconPath} />)).toMatchSnapshot();
  });

  it('renders the <path /> for the provided icon', () => {
    wrapper = shallow(<Icon path={iconPath} />);
    expect(wrapper.find('path').props()).toHaveProperty('d', iconPath);
  });

  describe('with the size prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon path={iconPath} size="3rem" />);
    });

    it('sets the width and height attributes of the <svg /> with the size', () => {
      expect(wrapper.find('svg').props()).toMatchObject({
        height: '3rem',
        width: '3rem',
      });
    });
  });

  describe('with the width prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon path={iconPath} width="3rem" />);
    });

    it('sets the width attribute of the <svg />', () => {
      expect(wrapper.find('svg').props()).toMatchObject({
        height: '1em',
        width: '3rem',
      });
    });
  });

  describe('with the height prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon path={iconPath} height="3rem" />);
    });

    it('sets the height attribute of the <svg />', () => {
      expect(wrapper.find('svg').props()).toMatchObject({
        height: '3rem',
        width: '1em',
      });
    });
  });

  describe('with the title prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon path={iconPath} title="An accessible title" />);
    });

    it('renders a <title /> with the title text', () => {
      expect(wrapper.find('title').text()).toBe('An accessible title');
    });
  });

  describe('with the fill prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon path={iconPath} fill="#c00" />);
    });

    it('sets the fill attribute of the <svg />', () => {
      expect(wrapper.find('svg').props()).toHaveProperty('fill', '#c00');
    });
  });
});
