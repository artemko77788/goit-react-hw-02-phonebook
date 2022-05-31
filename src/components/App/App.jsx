import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import React from 'react';
import s from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    this.setState(previousState => ({
      contacts: [...previousState.contacts, data],
    }));
  };

  render() {
    return (
      <div className={s.app}>
        <h1>Phonebook</h1>
        <ContactForm submit={this.formSubmitHandler} />

        {this.state.contacts.length === 0 ? (
          ''
        ) : (
          <>
            <h1>Contacts</h1>
            <Contacts data={this.state.contacts} />
          </>
        )}
      </div>
    );
  }
}

export default App;
