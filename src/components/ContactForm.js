import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

function ContactForm() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // Lấy user_id từ accessToken trong localStorage
  const getUserIdFromToken = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return null;
    try {
      const parsedToken = JSON.parse(token); // Parse đối tượng JSON
      return parsedToken.user_id || null; // Trả về user_id nếu tồn tại
    } catch (error) {
      console.error("Error parsing accessToken:", error);
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user_id = getUserIdFromToken();
    if (!user_id) {
      setResponseMessage("Lỗi: Không thể xác định user_id.");
      return;
    }

    const formData = {
      user_id,
      title,
      address,
      image,
      phoneNumber,
      website,
    };

    axios
      .post("http://localhost:3000/contact", formData)
      .then((response) => {
        console.log("Message sent successfully:", response.data);
        setResponseMessage("Message sent successfully!");
        // Clear form fields
        setTitle("");
        setAddress("");
        setImage("");
        setPhoneNumber("");
        setWebsite("");
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
          Thông tin địa điểm
        </span>
        <div
          style={{
            height: 1,
            border: "1px dashed #1677ff",
            width: "100%",
            margin: "8px 0"
          }}
        ></div>
        <Form layout="vertical" onSubmit={handleSubmit}>
          <Form.Item label={<strong>Tên địa điểm:</strong>}>
            <Input
              name="title"
              placeholder="Tên địa điểm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Item>
          <Form.Item label={<strong>Địa chỉ:</strong>}>
            <TextArea
              name="address"
              placeholder="Địa chỉ"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item label={<strong>Link ảnh:</strong>}>
            <TextArea
              name="image"
              placeholder="Điền đường link ảnh ở đây"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Item>
          <Form.Item label={<strong>Số điện thoại (nếu có):</strong>}>
            <Input
              name="phoneNumber"
              placeholder="Điền số điện thoại liên hệ ở đây"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item label={<strong>Link trang web (nếu có):</strong>}>
            <TextArea
              name="website"
              placeholder="Điền đường link trang web của địa điểm ở đây"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              Gửi liên hệ
            </Button>
          </Form.Item>
        </Form>
        {responseMessage && (
          <div style={{ marginTop: 16, color: responseMessage.includes("Lỗi") ? "red" : "green" }}>
            {responseMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
