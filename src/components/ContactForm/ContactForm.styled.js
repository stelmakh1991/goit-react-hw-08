import styled, { css } from "styled-components";
import { ErrorMessage, Field, Form } from "formik";
import hexToRgba from "hex-to-rgba";

export const Forms = styled(Form)`
  max-width: 400px;
  min-height: 200px;
  margin: 0 auto 70px auto;
  padding: 30px;
  border-radius: 10px;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.buttonTextColor};
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.buttonTextColor};
  display: block;
  margin-bottom: 15px;
`;

export const AddContactButton = styled.button`
  display: block;
  width: 100%;
  min-height: 40px;
  background-color: ${(props) => props.theme.backgroundColorAddButton};
  color: ${(props) => props.theme.buttonTextColor};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverColorAddButton};
  }
`;

export const ErrorMessages = styled(ErrorMessage)`
  color: ${(props) => props.theme.accentColor};
  font-size: 14px;
  margin-top: 5px;
`;

export const NumberInput = styled(Field)`
  width: 100%;
  padding: 10px 10px 10px 50px;
  background-color: ${(props) => hexToRgba(props.theme.buttonTextColor, 0.2)};
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  box-sizing: border-box;
  padding-right: 15px;
  color: ${(props) => props.theme.buttonTextColor};
  & + .flag-dropdown {
    background-color: ${(props) =>
      hexToRgba(props.theme.buttonTextColor, 0.2)} !important;
    border: none !important;
    :hover {
      background-color: ${(props) =>
        hexToRgba(props.theme.buttonTextColor, 0.2)} !important;
    }
  }
`;