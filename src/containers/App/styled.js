import styled from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';
import colors from 'assets/global/colors';

export const StyledSignature = styled.section`
  display: block;
  width: 100%;

  ${StyledWrapper} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const StyledSignatureHeader = styled.header`
  display: block;
  padding: 32px 0;

  ${StyledWrapper} {
    justify-content: flex-end;
    align-items: center;
  }
`;

export const StyledSignatureContainer = styled.form`
  display: block;
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSignatureFields = styled.div`
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }
`;

export const StyledSignatureActions = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: -10px;

  button {
    margin: 10px;
  }

  @media screen and (max-width: 420px) {
    button {
      display: block;
      width: 100%;
    }
  }
`;

export const StyledSignaturePreview = styled.div`
  display: block;
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export const StyledSignatureImage = styled.div`
  display: block;
  width: 100%;
`;

export const StyledSignatureInfo = styled.div`
  p {
    margin: 2px 0;
  }
`;

export const StyledSignatureName = styled.h3`
  margin: 0;
  color: ${colors.red400};
`;

export const StyledSignatureRole = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.black};
`;

export const StyledSignatureEmail = styled.p`
  font-size: 15px;
`;

export const StyledSignaturePhone = styled.p`
  font-size: 15px;
`;

export const StyledNotice = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  margin: 0;
  padding: 20px 30px;
  font-weight: 700;
  color: ${colors.white};
  text-align: center;
  background-color: ${(props) =>
    props.company === 'faster' ? colors.blue400 : colors.red400};
  opacity: ${(props) => (props.copied ? '1' : '0')};
  transform: ${(props) =>
    props.copied ? 'translateY(0)' : 'translateY(200px)'};
  transform: ${(props) =>
    props.copied
      ? 'translate3d(0, 0, 0)'
      : 'translate3d(0, 200px, 0)'};
  transition: all 0.2s linear;
`;
