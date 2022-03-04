import React from 'react';
import { StyledField, StyledSelect } from '../styled';

type Props = {
  size: string;
  options: [
    {
      label: string;
      value: string;
    }
  ];
};

const Input = React.forwardRef((props: Props, ref) => {
  const { size, options } = props;

  return (
    <StyledField ref={ref} size={size}>
      <StyledSelect>
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </StyledSelect>
    </StyledField>
  );
});

export default Input;
