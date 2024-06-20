import * as S from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <S.AuthNavContainer>
      <S.NavLinkAuth to="/register">Sign in</S.NavLinkAuth>
      <S.NavLinkAuth to="/login">Log In</S.NavLinkAuth>
    </S.AuthNavContainer>
  );
};