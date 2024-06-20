import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Container } from "../../components/Container/Container";
import * as S from "./RegisterPage.styled";

const RegisterPage = () => {
  return (
    <S.ImagesContainer>
      <Container>
        <S.TitleForm>Registration</S.TitleForm>
        <RegistrationForm />
      </Container>
    </S.ImagesContainer>
  );
};

export default RegisterPage;