import React, { Ref } from 'react';
import { StyledField, StyledSelect } from '../styled';

type Items = {
  label: string;
  value: string;
};

type SelectProps = {
  size: string;
  options: Items[];
};

const Select = React.forwardRef(
  ({ ...props }: SelectProps, ref: Ref<HTMLSelectElement>) => {
    const { size, options } = props;

    return (
      <StyledField size={size}>
        <StyledSelect ref={ref}>
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
