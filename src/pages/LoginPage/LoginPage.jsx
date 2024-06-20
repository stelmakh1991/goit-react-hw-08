import LoginForm from "../../components/LoginForm/LoginForm";
import { Container } from "../../components/Container/Container";
import * as S from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <S.ImagesContainer>
      <Container>
        <S.TitleForm>Login</S.TitleForm>
        <LoginForm />
      </Container>
    </S.ImagesContainer>
  );
};

export default LoginPage;