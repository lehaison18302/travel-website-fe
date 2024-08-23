import React, { useState } from "react";
import axios from "axios";
import "../components/ContactFormStyles.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    axios.post("http://localhost:3000/contact", formData)
      .then(response => {
        console.log("Message sent successfully:", response.data);
        setResponseMessage("Message sent successfully!");
        // Clear form fields
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(error => {
        console.error("Error sending message:", error);
        setResponseMessage("Error sending message. Please try again.");
      });
  };

  return (
    <>
      <div className="form-container">
        <h1>Send a message to us!</h1>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <textarea 
            placeholder="Message" 
            rows="4" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
}

export default ContactForm;
