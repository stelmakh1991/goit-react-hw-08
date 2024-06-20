import { useEffect } from "react";
import { GlobalCSS } from "../../styles/global";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Title } from "../../components/Title/Title";
import * as S from "./ContactsPage.styled";
import { Container } from "../../components/Container/Container";


const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <S.ContactsPageImagesContainer>
      <Container>
        <Title />
        <ContactForm />
        <SearchBox />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && contacts.length !== 0 && <ContactList />}
        <GlobalCSS />
      </Container>
    </S.ContactsPageImagesContainer>
  );
};

export default ContactsPage;