import * as S from "./Contact.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <S.Contact>
        <S.Name>{contact.name}</S.Name>
        <S.Number>{contact.number}</S.Number>
        <S.DeleteButton
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </S.DeleteButton>
      </S.Contact>
    </>
  );
};

export default Contact;