import { Field, Formik } from "formik";
import * as yup from "yup";
import * as S from "./ContactForm.styled";

import {
  FORM_INITIAL_VALUES,
  MAX_CHAR_VALIDATION,
  MIN_CHAR_VALIDATION,
} from "../../utils/constants";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { FormikInput } from "../FormikInput/FormikInput";

const contactsSchema = yup.object({
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
  number: yup.string().required("User number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={contactsSchema}
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      <S.Forms>
        <S.Label>
          <S.Title>Name</S.Title>
          <FormikInput type="name" name="name" />
          <S.ErrorMessages component="p" name="name" />
        </S.Label>
        <S.Label>
          <S.Title>Number</S.Title>
          <S.NumberInput name="number" component={PhoneNumberInput} />
          <S.ErrorMessages component="p" name="number" />
        </S.Label>
        <S.AddContactButton type="submit">Add contact</S.AddContactButton>
      </S.Forms>
    </Formik>
  );
};

export default ContactForm;