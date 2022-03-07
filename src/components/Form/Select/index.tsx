import React, { Ref } from 'react';
import { StyledField, StyledSelect } from '../styled';

type Items = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Items[];
};

const Select = React.forwardRef(
  ({ ...props }: SelectProps, ref: Ref<HTMLSelectElement>) => {
    const { options } = props;

    return (
      <StyledField style={{ width: '300px' }}>
        <StyledSelect ref={ref} {...props}>
          {options.map((option, index) => {
            return (
              <option
                key={`${option.value}-${index}`}
                value={option.value}
              >
                {option.label}
              </option>
            );
          })}
        </StyledSelect>
      </StyledField>
    );
  }
);

export default Select;
