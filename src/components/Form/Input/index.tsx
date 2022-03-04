import React from 'react';
import { StyledField, StyledInput } from '../styled';

const Input = React.forwardRef(({ ...props }, ref) => {
  return (
    <StyledField>
      <StyledInput {...props} />
    </StyledField>
  );
});

export default Input;
