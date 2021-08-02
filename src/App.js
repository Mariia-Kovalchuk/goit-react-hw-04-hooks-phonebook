import { Component } from 'react';
import { v4 } from 'uuid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: v4(),
      name,
      number,
    };
    const { contacts } = this.state;

    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is already in contacts`);
    } else if (contacts.find(({ number }) => number === contact.number)) {
      alert(`${contact.number} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContats = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  render() {
    const { addContact, delContact, changeFilter, filterContats } = this;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={changeFilter} />
        <ContactList contacts={filterContats()} onDeleteContact={delContact} />
      </Container>
    );
  }
}

export default App;
