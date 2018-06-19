import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const render = () => shallow(<LoadingIndicator {...props} />).dive();

  it('matches snapshot', () => {
    expect(render()).toMatchSnapshot();
  });
});
