import React, { useState } from 'react';

const AddContact = (props) => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name === "" || userInfo.email === "") {
      alert('All fields are mandatory');
      return;
    }
    props.AddContactHandler(userInfo);
    setUserInfo({ name: "", email: "" });
  }

  return (
    <>
      <h1>Contact Manager</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          placeholder='Name'
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        /><br />
        <label htmlFor='email'>E-mail</label>
        <input
          id='email'
          type='text'
          placeholder='E-mail'
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        /><br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddContact;
