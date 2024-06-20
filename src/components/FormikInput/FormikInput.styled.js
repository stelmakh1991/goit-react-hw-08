import { Field } from "formik";
import hexToRgba from "hex-to-rgba";
import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => hexToRgba(props.theme.buttonTextColor, 0.2)};
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  box-sizing: border-box;
  padding-right: 15px;
  color: ${(props) => props.theme.buttonTextColor};
`;

export const EyeImages = styled.img`
  width: 25px;
  height: 25px;
`;

export const EyeButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;