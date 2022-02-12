import React from 'react';
import { StyledField, StyledInput } from '../styled';

const Input = React.forwardRef(({ ...props }, ref) => {
  return (
    <StyledField>
      <StyledInput ref={ref} {...props} />
    </StyledField>
  );
});

export default Input;
