// App.jsx
import { useEffect } from 'react';
import './App.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { fetchContacts } from '../redux/contactsOps';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
        <div className="container">
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
  );
}

export default App;
