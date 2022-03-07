import React, { Ref } from 'react';
import { StyledField, StyledInput } from '../styled';

type InputProps = {
  type: 'text' | 'email' | 'tel';
  placeholder: string;
};

const Input = React.forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <StyledField>
        <StyledInput ref={ref} {...props} />
      </StyledField>
    );
  }
);

export default Input;
