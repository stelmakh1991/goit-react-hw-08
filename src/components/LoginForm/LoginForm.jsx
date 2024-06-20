import { Formik } from "formik";
import * as yup from "yup";
import * as S from "./LoginForm.styled";

import {
  LOGIN_INITIAL_VALUES,
  MAX_CHAR_PASSWORD_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from "../../utils/constants";
import { useDispatch } from "react-redux";
import FormButton from "../FormButton/FormButton";
import { login } from "../../redux/auth/operations";
import { FormikInput } from "../FormikInput/FormikInput";

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Password must be at least ${MIN_CHAR_PASSWORD_VALIDATION} characters`
    )
    .max(
      MAX_CHAR_PASSWORD_VALIDATION,
      `Password must not exceed ${MAX_CHAR_PASSWORD_VALIDATION} characters`
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, formik) => {
    dispatch(login({ formData, formik }));
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={LOGIN_INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <S.Forms>
          <S.Label>
            <S.Title>Email</S.Title>
            <FormikInput type="email" name="email" />
            <S.ErrorMessages component="p" name="email" />
          </S.Label>
          <S.Label>
            <S.Title>Password</S.Title>
            <FormikInput type="password" name="password" />
            <S.ErrorMessages component="p" name="password" />
          </S.Label>
          <FormButton isSubmitting={isSubmitting}>Send</FormButton>
        </S.Forms>
      )}
    </Formik>
  );
};

export default LoginForm;