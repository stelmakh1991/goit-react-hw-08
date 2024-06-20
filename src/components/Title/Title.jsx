import * as S from "./Title.styled";

export const Title = () => {
  return (
    <S.TitleContainer>
      <S.TitleText>Phonebook</S.TitleText>
      <S.TitleImages
        src="/images/phone-call.png"
        alt="phone-image"
      ></S.TitleImages>
    </S.TitleContainer>
  );
};