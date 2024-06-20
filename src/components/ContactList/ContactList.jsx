import Contact from "../Contact/Contact";
import * as S from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <S.ContactList>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </S.ContactList>
  );
};
export default ContactList;