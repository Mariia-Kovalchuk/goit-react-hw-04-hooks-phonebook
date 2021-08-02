import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])



  const addContact = ({ name, number }) => {
    const contact = {
      id: v4(),
      name,
      number,
    };

    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is already in contacts`);
    } else if (contacts.find(({ number }) => number === contact.number)) {
      alert(`${contact.number} is already in contacts`);
    } else {
      setContacts(prevContacts => ([contact, ...prevContacts]));
    }
  };

  const delContact = contactId => {
    setContacts(prevContacts => ([...prevContacts.filter(contact => contact.id !== contactId)]
    ));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContats = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContats()} onDeleteContact={delContact} />
    </Container>
  );
}


export default App;
