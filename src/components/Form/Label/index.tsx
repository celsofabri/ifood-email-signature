import React, { Ref } from 'react';
import { StyledLabel } from '../styled';

type LabelProps = {
  htmlFor: string;
  children: string | React.ReactNode;
  company: string;
};

const Label = React.forwardRef(
  (
    { children, ...props }: LabelProps,
    ref: Ref<HTMLLabelElement>
  ) => {
    return (
      <StyledLabel ref={ref} {...props}>
        {children}
      </StyledLabel>
    );
  }
);

export default Label;
