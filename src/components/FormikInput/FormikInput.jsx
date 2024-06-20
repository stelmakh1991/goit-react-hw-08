import { useState } from "react";
import * as S from "./FormikInput.styled";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { useTheme } from "styled-components";

export const FormikInput = ({ type, name }) => {
  const [inputType, setInputType] = useState(type);
  const theme = useTheme();

  return (
    <S.InputContainer>
      <S.Input type={inputType} name={name} />
      {type === "password" && (
        <S.EyeButton
          type="button"
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        >
          {inputType === "password" && <FaEye color={theme.buttonTextColor} />}
          {inputType === "text" && (
            <FaEyeLowVision color={theme.buttonTextColor} />
          )}
        </S.EyeButton>
      )}
    </S.InputContainer>
  );
};