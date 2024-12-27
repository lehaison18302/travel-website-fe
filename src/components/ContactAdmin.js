import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../components/ContactAdminStyle.css";

function ContactAdmin() {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      const fetchContacts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/admin');
          setContacts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchContacts();
    }, []);
  
    return (
      <div className="contact-admin">
        <h2>Danh sách liên hệ</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.email}>
              <strong>Tên:</strong> {contact.name}
              <br />
              <strong>Email:</strong> {contact.email}
              <br />
              <strong>Tin nhắn:</strong> {contact.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ContactAdmin;