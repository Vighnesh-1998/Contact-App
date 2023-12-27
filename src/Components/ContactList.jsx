import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props)
    const deleteContactHandler = (id) =>{props.getContactId(id)}
    const renderContactList = () => {
      return props.contacts.map(contact => 
        (
          <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}/>
        )
      )
    }
    
  return (
    <>
        <div style={{padding: 0, marginTop: "10px", color: "gray"}}>{renderContactList()}</div>
        
        
    </>
  )
}

export default ContactList