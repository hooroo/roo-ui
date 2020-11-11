import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiddenInput, ButtonLabel } from './primitives';

const ButtonGroupOption = ({
  id,
  name,
  label,
  value,
  checked,
  disabled,
  size,
  totalOptions,
  onChange,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleLabelClick = () => {
    setClicked(true);
  };

  const handleInputFocus = event => {
    if (clicked) {
      setClicked(false);
      event.target.blur();
    }
  };

  const handleChange = event => {
    if (!disabled) {
      onChange(event.target.value);
    }
  };

  return (
    <>
      <HiddenInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        onFocus={handleInputFocus}
        disabled={disabled}
      />
      <ButtonLabel
        htmlFor={id}
        onClick={handleLabelClick}
        size={size}
        totalOptions={totalOptions}
      >
        {label}
      </ButtonLabel>
    </>
  );
};

ButtonGroupOption.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  totalOptions: PropTypes.number.isRequired,
};

ButtonGroupOption.defaultProps = {
  checked: false,
  disabled: false,
  size: 'base',
};

export default ButtonGroupOption;
