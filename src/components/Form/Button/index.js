import React from 'react';
import { StyledButton } from '../styled';

const Button = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      {children}
    </StyledButton>
  );
});

export default Button;
