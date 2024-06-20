import styled from "styled-components";

export const FormButton = styled.button`
  display: block;
  width: 100%;
  min-height: 40px;
  background-color: ${(props) =>
    props.isLoading ? props.theme.ordinaryColor : props.theme.accentColor};
  color: ${(props) => props.theme.buttonTextColor};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;