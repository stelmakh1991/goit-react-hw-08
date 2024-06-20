import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkAuth = styled(NavLink)`
  color: ${(props) => props.theme.ordinaryColor};
  font-size: 20px;
  text-decoration: none;
`;

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 30px;
`;