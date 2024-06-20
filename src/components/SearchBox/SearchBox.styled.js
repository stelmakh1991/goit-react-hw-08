import hexToRgba from "hex-to-rgba";
import styled from "styled-components";

export const SearchBox = styled.label`
  margin-top: 20px;
  display: block;
  margin: 0 auto 30px auto;
  max-width: 364px;
`;

export const SearchTitle = styled.span`
  color: ${(props) => props.theme.buttonTextColor};
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: ${(props) => hexToRgba(props.theme.buttonTextColor, 0.2)};
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  padding-right: 15px;
  color: ${(props) => props.theme.buttonTextColor};
`;