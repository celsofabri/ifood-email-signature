import styled from 'styled-components';
import colors from 'assets/global/colors';

export const StyledField = styled.div`
  display: block;
  width: 100%;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${colors.gray400};
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  color: ${colors.blue400};
  border: 1px solid ${colors.blue400};
  background-color: ${colors.white};
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.blue400};
  }
`;
