import styled from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';
import colors from 'assets/global/colors';
import fonts from 'assets/global/fonts';
import iconCompany from 'assets/images/icon-company.svg';

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

  select {
    padding-right: 48px;
    font-weight: 700;
    text-align: right;
    border: none;
    appearance: none;
    background-image: url(${iconCompany});
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 24px auto;
    outline: none;
    transition: all 0.3s ease-out;

    &:hover {
      padding-right: 42px;
      color: ${colors.gray400};
    }
  }
`;

export const StyledSignatureMain = styled.main`
  // display: flex;
  // align-items: center;
  width: 100%;
  height: 100vh;
`;

export const StyledSignatureContainer = styled.form`
  display: block;
  width: 48.5%;

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
  width: 48.5%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
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
  font-family: ${fonts.primary};
  color: ${colors.red400};
`;

export const StyledSignatureRole = styled.p`
  font-family: ${fonts.secondary};
  font-size: 15px;
  font-weight: 700;
  color: ${colors.black};
`;

export const StyledSignatureEmail = styled.p`
  font-family: ${fonts.secondary};
  font-size: 15px;
`;

export const StyledSignaturePhone = styled.p`
  font-family: ${fonts.secondary};
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
