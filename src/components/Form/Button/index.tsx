import React, { Ref } from 'react';
import { StyledButton } from '../styled';

type ButtonProps = {
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick: () => void;
  [property: string]: any;
};

const Button = React.forwardRef(
  (
    { children, ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
