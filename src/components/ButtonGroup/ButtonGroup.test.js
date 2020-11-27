import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';
import ButtonGroup from './';
import ButtonGroupOption from './ButtonGroupOption';

describe('<ButtonGroup />', () => {
  let props;
  let optionNodes;
  let wrapper;

  const render = () => shallowWithTheme(<ButtonGroup {...props} />, theme);

  beforeEach(() => {
    props = {
      name: 'testButtonGroup',
      value: 'one',
      disabled: false,
      options: [
        {
          label: 'One',
          value: 'one',
        },
        {
          label: 'Two',
          value: 'two',
        },
      ],
      onChange: jest.fn(),
      size: 'sm',
    };

    wrapper = render();
    optionNodes = wrapper.find(ButtonGroupOption);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('passes label prop to each ButtonGroupOption', () => {
    const values = optionNodes.map(node => node.prop('label'));
    expect(values).toEqual(['One', 'Two']);
  });

  it('passes name prop to each ButtonGroupOption', () => {
    const values = optionNodes.map(node => node.prop('name'));
    expect(values).toEqual([props.name, props.name]);
  });

  it('passes value prop to each ButtonGroupOption', () => {
    const values = optionNodes.map(node => node.prop('value'));
    expect(values).toEqual(['one', 'two']);
  });

  it('passes checked prop to each ButtonGroupOption', () => {
    const values = optionNodes.map(node => node.prop('checked'));
    expect(values).toEqual([true, false]);
  });

  it('passes disabled prop to each ButtonGroupOption', () => {
    const values = optionNodes.map(node => node.prop('disabled'));
    expect(values).toEqual([false, false]);
  });

  it('passes size prop to each ButtonGroupOption', () => {
    const values = optionNodes.map(node => node.prop('size'));
    expect(values).toEqual(['sm', 'sm']);
  });

  it('passes id prop to each ButtonGroupOption', () => {
    const values = optionNodes.map(node => node.prop('id'));
    expect(values).toEqual([
      'buttonGroup_testButtonGroup_0',
      'buttonGroup_testButtonGroup_1',
    ]);
  });

  describe('onChange', () => {
    let values;

    beforeEach(() => {
      values = optionNodes.map(node => node.prop('onChange'));
      values.forEach(fn => fn());
    });

    it('passes a handleChange prop to each ButtonGroupOption', () => {
      expect(values).toEqual([props.onChange, props.onChange]);
    });

    it('invokes the onChange fn passed to ButtonGroup when called', () => {
      expect(props.onChange).toHaveBeenCalledTimes(2);
    });

    describe('on value prop change', () => {
      it('updates the checked ButtonGroupOption', () => {
        wrapper.setProps({ value: 'two' });

        expect(
          wrapper.find('ButtonGroupOption[value="two"]').prop('checked'),
        ).toEqual(true);
      });
    });
  });
});
