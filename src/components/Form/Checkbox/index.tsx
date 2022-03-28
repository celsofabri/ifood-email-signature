import React, { Ref } from 'react';
import { StyledField, StyledCheckbox } from '../styled';

const Checkbox = React.forwardRef(
  ({ ...props }, ref: Ref<HTMLInputElement>) => {
    return (
      <StyledField style={{ width: '300px' }}>
        <StyledCheckbox
          type="checkbox"
          defaultChecked={true}
          ref={ref}
          {...props}
        />
      </StyledField>
    );
  }
);

export default Checkbox;
