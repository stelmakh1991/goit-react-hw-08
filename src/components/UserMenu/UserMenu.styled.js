import styled from "styled-components";

export const LogOutButton = styled.button`
  display: block;
  width: 100%;
  min-height: 40px;
  color: ${(props) => props.theme.ordinaryColor};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;