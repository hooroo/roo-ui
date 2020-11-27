import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Flex from '../Flex';
import ButtonGroupOption from './ButtonGroupOption';

// Setting a transform here creates a stacking context, so the we can use z-index
// in ButtonGroupOption without worrying about z-index conflicts with other components
const ButtonGroupWrapper = styled(Flex)`
  transform: scale(1);
`;

const ButtonGroup = ({
  name,
  value,
  options,
  disabled,
  size,
  onChange,
  ...rest
}) => {
  return (
    <ButtonGroupWrapper role="radiogroup" aria-label={name} {...rest}>
      {options.map((option, index) => (
        <ButtonGroupOption
          key={index}
          id={`buttonGroup_${name}_${index}`}
          name={name}
          label={option.label}
          value={option.value}
          checked={option.value === value}
          disabled={disabled}
          size={size}
          totalOptions={options.length}
          onChange={onChange}
        />
      ))}
    </ButtonGroupWrapper>
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
