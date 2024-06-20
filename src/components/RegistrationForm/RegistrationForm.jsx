import { Formik } from "formik";
import * as yup from "yup";
import * as S from "./RegistrationForm.styled";

import {
  MAX_CHAR_PASSWORD_VALIDATION,
  MAX_CHAR_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
  MIN_CHAR_VALIDATION,
  REGISTRATION_INITIAL_VALUES,
} from "../../utils/constants.jsx";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import FormButton from "../FormButton/FormButton";
import { FormikInput } from "../FormikInput/FormikInput";

const registrationSchema = yup.object({
  name: yup
    .string()
    .required(`User name is required`)
    .min(
      MIN_CHAR_VALIDATION,
      `Your name must contain at least ${MIN_CHAR_VALIDATION} characters`
    )
    .max(
      MAX_CHAR_VALIDATION,
      `Your name should not contain more than ${MAX_CHAR_VALIDATION} characters`
    ),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(MIN_CHAR_PASSWORD_VALIDATION, "Password must be at least 8 characters")
    .max(MAX_CHAR_PASSWORD_VALIDATION, "Password must not exceed 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, formik) => {
    dispatch(register({ formData, formik }));
  };

  return (
    <Formik
      validationSchema={registrationSchema}
      initialValues={REGISTRATION_INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <S.Forms>
          <S.Label>
            <S.Title>Name</S.Title>
            <FormikInput type="text" name="name" />
            <S.ErrorMessages component="p" name="name" />
          </S.Label>
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

export default RegistrationForm;