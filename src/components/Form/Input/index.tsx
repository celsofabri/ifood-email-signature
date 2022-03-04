import React from 'react';
import { StyledField, StyledInput } from '../styled';

type InputProps = {
  type: 'text' | 'email' | 'tel';
  placeholder: string;
};

const Input = React.forwardRef(({ ...props }: InputProps) => {
  return (
    <StyledField>
      <StyledInput {...props} />
    </StyledField>
  );
});

export default Input;
