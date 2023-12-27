import React from 'react';
// import ContactList from './Components/ContactList';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
    <>
            <div className="container" style={{display: 'flex',borderBottom: '1px solid gray', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', margin: '30px',}}>
              <div className="fi" >
                
                <div className="header">{name}</div>
                <div className="email">{email}</div>
                
              </div>
            <i className="fa-solid fa-trash-can" style={{ position: 'absolute', right: '247px'}
          } onClick={() => props.clickHandler(id) }></i>
            </div>
          </>
  )
}

export default ContactCard