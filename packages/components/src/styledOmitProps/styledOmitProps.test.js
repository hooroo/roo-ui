import React from 'react';
import { mount } from 'enzyme';
import styledOmitProps from '.';

const itRendersValidHtmlAttrubutes = (TestComponent) => {
  it('renders valid html attrubutes', () => {
    expect(mount(<TestComponent id="test-component" />).find('span').prop('id')).toBe('test-component');
  });
};

const itFiltersOutInvalidHtmlAttributes = (TestComponent) => {
  it('filters out invalid html attributes', () => {
    expect(mount(<TestComponent beastMode />).find('span').prop('beastMode')).toBe(undefined);
  });
};

const itFiltersOutValidHtmlAttributesThatAreAlsoStyledSystemProps = (TestComponent) => {
  it('filters out valid html attributes that are also styled system props', () => {
    expect(mount(<TestComponent fontSize={5} />).find('span').prop('fontSize')).toBe(undefined);
  });
};

const itRendersValidHtmlAttributesThatAreAlsoStyledSystemProps = (TestComponent) => {
  it('renders valid html attributes that are also styled system props', () => {
    expect(mount(<TestComponent fontSize={5} />).find('span').prop('fontSize')).toBe(5);
  });
};

describe('without options', () => {
  const Component = styledOmitProps('span')``;

  itRendersValidHtmlAttrubutes(Component);

  itFiltersOutInvalidHtmlAttributes(Component);

  itFiltersOutValidHtmlAttributesThatAreAlsoStyledSystemProps(Component);
});

describe('with omitStyledSystemProps = false', () => {
  const Component = styledOmitProps('span', { omitStyledSystemProps: false })``;

  itRendersValidHtmlAttrubutes(Component);

  itFiltersOutInvalidHtmlAttributes(Component);

  itRendersValidHtmlAttributesThatAreAlsoStyledSystemProps(Component);
});

describe('with "data-testid" in omit list', () => {
  const Component = styledOmitProps('span', { omit: ['data-testid'] })``;

  itRendersValidHtmlAttrubutes(Component);

  itFiltersOutInvalidHtmlAttributes(Component);

  itFiltersOutValidHtmlAttributesThatAreAlsoStyledSystemProps(Component);

  it('filters out "data-testid"', () => {
    expect(mount(<Component data-testid="test-component" />).find('span').prop('data-testid')).toBe(undefined);
  });
});
