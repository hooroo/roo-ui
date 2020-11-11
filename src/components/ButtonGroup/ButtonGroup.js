import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../';
import ButtonGroupOption from './ButtonGroupOption';

const ButtonGroup = ({
  name,
  value,
  options,
  disabled,
  size,
  onChange,
  ...rest
}) => {
  const [checked, setChecked] = useState(value);

  const handleChange = value => {
    setChecked(value);
    onChange(value);
  };

  return (
    <Flex role="radiogroup" aria-label={name} {...rest}>
      {options.map((option, index) => (
        <ButtonGroupOption
          key={index}
          id={`buttonGroup_${name}_${index}`}
          name={name}
          label={option.label}
          value={option.value}
          checked={option.value === checked}
          disabled={disabled}
          size={size}
          totalOptions={options.length}
          onChange={handleChange}
        />
      ))}
    </Flex>
  );
};

ButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
};

ButtonGroup.defaultProps = {
  disabled: false,
  size: 'base',
};

export default ButtonGroup;
