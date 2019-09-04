import React from 'react';
import { shallow } from 'enzyme';
import { axe } from 'jest-axe';

import Wrapper from './';

const render = props => shallow(<Wrapper {...props}>Hello world</Wrapper>);

describe('<Wrapper />', () => {
  it('renders correctly', () => {
    const wrapper = render({ bg: 'greys.porcelain', p: 3 });
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    const wrapper = render({ bg: 'greys.porcelain', p: 3 });
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('renders as a Box if it is passed props', () => {
    const wrapper = render({ bg: 'greys.porcelain', p: 3 });
    expect(wrapper.find('Box')).toHaveLength(1);
  });

  it('renders as a Fragment if it is not passed props', () => {
    const wrapper = render();
    expect(wrapper.find('Fragment')).toHaveLength(1);
  });
});
