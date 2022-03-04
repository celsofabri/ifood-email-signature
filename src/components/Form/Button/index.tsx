import React, { Ref } from 'react';
import { StyledButton } from '../styled';

const Button = React.forwardRef(
  ({ children, ...props }, ref: Ref<HTMLButtonElement>) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
