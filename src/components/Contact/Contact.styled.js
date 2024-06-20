import styled from "styled-components";

export const Contact = styled.li`
  padding: 10px;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 120px;
  margin: auto 0;

  & p {
    margin: 0;
    padding: 0;
    margin-right: 20px;
  }
`;

export const Name = styled.p`
  color: ${(props) => props.theme.buttonTextColor};
  font-weight: bold;
  font-size: 20px;
`;

export const Number = styled.p`
  color: ${(props) => props.theme.buttonTextColor};
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.buttonTextColor};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;