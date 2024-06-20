import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import * as S from "./AppBar.styled";
import { Container } from "../Container/Container";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <S.Header>
      <Container>
        <S.HeaderContainer>
          <S.ContainerUserMenu>
            <S.StyledLink to="/">Home</S.StyledLink>
            {isLoggedIn && <S.StyledLink to="/contacts">Contacts</S.StyledLink>}
          </S.ContainerUserMenu>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </S.HeaderContainer>
      </Container>
    </S.Header>
  );
};

export default AppBar;