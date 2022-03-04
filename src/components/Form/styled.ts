import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import colors from 'assets/global/colors';

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  size: string;
  [property: string]: any;
}
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  company: string;
  children: React.ReactNode;
  [property: string]: any;
}

export const StyledField = styled.div<FieldProps>`
  display: block;
  width: ${(props) => (props.size ? props.size : '100%')};
`;

export const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  padding: 10px 20px;
  color: ${(props) =>
    props.company === 'faster' ? colors.blue400 : colors.red400};
  };
  border: 1px solid ${(props) =>
    props.company === 'faster' ? colors.blue400 : colors.red400};
  };
  background-color: ${colors.white};
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
    background-color: ${(props) =>
      props.company === 'faster' ? colors.blue400 : colors.red400};
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${colors.gray400};
  border-radius: 4px;
`;

export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${colors.gray400};
  border-radius: 4px;
  cursor: pointer;
`;
