import * as S from "./HomePage.styled";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Container } from "../../components/Container/Container";
import { useTheme } from "styled-components";
import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";

const HomePage = () => {
  const theme = useTheme();
  return (
    <S.ImageContainer>
      <Container>
        <HomePageTitle />
      </Container>
    </S.ImageContainer>
  );
};

export default HomePage;