import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  console.log(LOCAL_STORAGE_KEY)
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    setContacts([...contacts,{id: uuidv4(), ...contact}]);
  }
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const removeContactHandler = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContact);
  }
  

  return (
    <>
      <AddContact AddContactHandler={AddContactHandler}/>
      <ContactList contacts={contacts} getContactId = {removeContactHandler} />
    </>
  );
}

export default App;
