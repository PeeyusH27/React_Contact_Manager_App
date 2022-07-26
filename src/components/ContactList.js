import React from "react";
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
  <div className="main" style={{fontSize:'15px'}}>
    <h2>Contact list
      <Link to='/add'> 
      <button style={{backgroundColor:'red', marginLeft:'60rem'}} className="ui button blue right">Add Contact</button>
      </Link>
    </h2>
    <div className="ui celled list">{renderContactList}</div>
  </div>
  );
};
export default ContactList;
