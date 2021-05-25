import React from 'react';
import theme from 'theme';
import { axe, mountWithTheme } from 'testUtils';
import ButtonGroupOption from './ButtonGroupOption';
import { ButtonLabel, HiddenInput } from './primitives';

describe('<ButtonGroupOption />', () => {
  let props;
  let wrapper;
  let input;
  let inputDOMNode;
  let label;
  let labelDOMNode;
  let blurSpy;

  beforeEach(() => {
    props = {
      id: 'radio_one',
      name: 'radio_one',
      label: 'Click Me',
      value: 'radio_one_value',
      checked: false,
      disabled: false,
      onChange: jest.fn(),
      size: 'sm',
      totalOptions: 3,
    };

    wrapper = mountWithTheme(<ButtonGroupOption {...props} />, theme);
    label = wrapper.find(ButtonLabel);
    labelDOMNode = label.getDOMNode();
    input = wrapper.find(HiddenInput);
    inputDOMNode = input.getDOMNode();
    blurSpy = jest.spyOn(inputDOMNode, 'blur');
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('renders HiddenInput with expected props', () => {
    expect(input.props()).toEqual({
      type: 'radio',
      id: props.id,
      name: props.name,
      value: props.value,
      checked: props.checked,
      disabled: props.disabled,
      onChange: expect.any(Function),
      onFocus: expect.any(Function),
    });
  });

  it('renders ButtonLabel with expected props', () => {
    expect(label.props()).toEqual({
      htmlFor: props.id,
      onClick: expect.any(Function),
      children: props.label,
      size: props.size,
      totalOptions: props.totalOptions,
    });
  });

  describe('when input is clicked', () => {
    beforeEach(() => {
      label.simulate('click', { target: labelDOMNode });
      input.simulate('focus', { target: inputDOMNode });
      input.simulate('change', { target: inputDOMNode });
    });

    it('calls props.onChange with value', () => {
      expect(props.onChange).toHaveBeenCalledWith(props.value);
    });

    it('blurs the input', () => {
      expect(blurSpy).toHaveBeenCalled();
    });
  });

  describe('when input is changed using keyboard', () => {
    beforeEach(() => {
      input.simulate('focus', { target: inputDOMNode });
      input.simulate('change', { target: inputDOMNode });
    });

    it('calls props.onChange with value', () => {
      expect(props.onChange).toHaveBeenCalledWith(props.value);
    });

    it('does not blur the input', () => {
      expect(blurSpy).not.toHaveBeenCalled();
    });
  });
});
