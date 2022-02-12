import React from 'react';
import { StyledField, StyledSelect } from '../styled';

const Input = React.forwardRef(({ ...props }, ref) => {
  const { size } = props;

  return (
    <StyledField size={size}>
      <StyledSelect ref={ref} {...props} />
    </StyledField>
  );
});

export default Input;
