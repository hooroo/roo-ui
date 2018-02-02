import React from 'react';
import { shallow } from 'enzyme';

import Icon from '.';
import qantasPaths from './qantasPaths.json';

describe('<Icon />', () => {
  let wrapper;

  it('renders correctly', () => {
    expect(shallow(<Icon />)).toMatchSnapshot();
  });

  describe('defaults', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon />);
    });

    it('renders the <path /> for the default icon', () => {
      expect(wrapper.find('path').props()).toHaveProperty('d', paths.location);
    });

    it('sets the data-id attribute of the <svg />', () => {
      expect(wrapper.find('svg').props()).toHaveProperty('data-id', 'icon-location');
    });

    it('renders a <title /> with default text', () => {
      expect(wrapper.find('title').text()).toBe('Location icon');
    });

    it('sets the width and height attributes of the <svg />', () => {
      expect(wrapper.find('svg').props()).toMatchObject({
        height: '1em',
        width: '1em',
      });
    });

    it('sets the fill attribute <svg />', () => {
      expect(wrapper.find('svg').props()).toHaveProperty('fill', 'currentColor');
    });
  });

  describe('with the name prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon name="food" />);
    });

    it('renders the <path /> for the icon', () => {
      expect(wrapper.find('path').props()).toHaveProperty('d', paths.food);
    });

    it('sets the data-id attribute of the <svg /> with the name', () => {
      expect(wrapper.find('svg').props()).toHaveProperty('data-id', 'icon-food');
    });
  });

  describe('with the size prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon size="3rem" />);
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
      wrapper = shallow(<Icon width="3rem" />);
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
      wrapper = shallow(<Icon height="3rem" />);
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
      wrapper = shallow(<Icon title="An accessible title" />);
    });

    it('renders a <title /> with the title text', () => {
      expect(wrapper.find('title').text()).toBe('An accessible title');
    });
  });

  describe('with the fill prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Icon fill="#c00" />);
    });

    it('sets the fill attribute of the <svg />', () => {
      expect(wrapper.find('svg').props()).toHaveProperty('fill', '#c00');
    });
  });
});
