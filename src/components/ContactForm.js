import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;
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
      message
    };

    axios
      .post("http://localhost:3000/contact", formData)
      .then((response) => {
        console.log("Message sent successfully:", response.data);
        setResponseMessage("Message sent successfully!");
        // Clear form fields
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setResponseMessage("Error sending message. Please try again.");
      });
  };

  return (
    <div
      className="flex contact-container"
      style={{ width: "100%", justifyContent: "center", padding: 32, gap: 16 }}
    >
      <div className="form-contact">
        <span className="flex jusCen" style={{ fontSize: 32, fontWeight: 600 }}>
          Tâm thư góp ý gửi 36 Phượt!
        </span>
        <div
          style={{
            height: 1,
            border: "1px dashed #1677ff",
            width: "100%",
            margin: "8px 0"
          }}
        ></div>
        <Form layout="vertical">
          <Form.Item label={<strong>Họ và tên:</strong>}>
            <Input name="mail-name" placeholder="Tên của bạn là gì?" />
          </Form.Item>
          <Form.Item label={<strong>Email cá nhân:</strong>}>
            <Input
              name="mail-name"
              placeholder="36 Phượt xin email của bạn nhé"
            />
          </Form.Item>
          <Form.Item label={<strong>Ý kiến đóng góp:</strong>}>
            <Input.TextArea
              name="mail-name"
              style={{minHeight:100}}
              placeholder="Hãy gửi đôi lời ý kiến đóng góp của bạn ở đây"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Gửi thư</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
