import React from 'react';
import { mount } from 'enzyme';
import styledOmitProps from './styledOmitProps';

it('creates an unfiltered component if supplied a single argument', () => {
  const Span = styledOmitProps('span')``;
  const wrapper = mount(<Span hidden>Text</Span>);
  const domNode = wrapper.find('span').getDOMNode();
  expect(wrapper.find('span').prop('hidden')).toEqual(true);
  expect(domNode.getAttribute('hidden')).toEqual('');
});

it('renders valid html attributes that are not in the filter list', () => {
  const Span = styledOmitProps('span', { omit: ['not-color'] })``;
  const wrapper = mount(<Span color="red">Text</Span>);
  const domNode = wrapper.find('span').getDOMNode();
  expect(wrapper.find('span').prop('color')).toEqual('red');
  expect(domNode.getAttribute('color')).toEqual('red');
});

it('does not render valid html attributes that are filtered', () => {
  const Span = styledOmitProps('span', { omit: ['color'] })``;
  const wrapper = mount(<Span color="red">Text</Span>);
  const domNode = wrapper.find('span').getDOMNode();
  expect(wrapper.find('span').prop('color')).toBeUndefined();
  expect(domNode.getAttribute('color')).toEqual(null);
});

fit('does not render styled-system attributes', () => {
  const Span = styledOmitProps('span', { omit: ['color'] })``;
  const wrapper = mount(<Span color="red" mb={12} p={4}>Text</Span>);

  expect(wrapper.find('span').prop('mb')).toBeUndefined();
  expect(wrapper.find('span').prop('p')).toBeUndefined();

  const domNode = wrapper.find('span').getDOMNode();
  expect(domNode.getAttribute('mb')).toEqual(null);
  expect(domNode.getAttribute('p')).toEqual(null);
});
