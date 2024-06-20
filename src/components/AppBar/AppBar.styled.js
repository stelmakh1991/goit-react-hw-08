import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.secondaryColor};
  min-height: 60px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.ordinaryColor};
  font-size: 20px;
  text-decoration: none;
`;

export const ContainerUserMenu = styled.div`
  display: flex;
  gap: 40px;
`;