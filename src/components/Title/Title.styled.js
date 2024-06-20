import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TitleText = styled.h1`
  color: ${(props) => props.theme.buttonTextColor};
  font-size: 50px;
`;

export const TitleImages = styled.img`
  width: 40px;
  height: 40px;
`;