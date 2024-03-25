// ContactList.jsx
import css from './ContactList.module.css';
import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contactsSlice';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

