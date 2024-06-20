import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const TypingText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 6s steps(90) infinite;
  color: ${(props) => props.theme.buttonTextColor};
  text-transform: uppercase;
  margin-top: 40px;
  font-size: 40px;
`;