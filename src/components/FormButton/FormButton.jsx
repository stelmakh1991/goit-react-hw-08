import * as S from "./FormButton.styled";

const FormButton = ({ isSubmitting, children }) => {
  return (
    <S.FormButton type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Loading..." : children}
    </S.FormButton>
  );
};

export default FormButton;