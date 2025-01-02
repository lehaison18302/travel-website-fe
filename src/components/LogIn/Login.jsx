import React, { useState } from "react";
import bgLogin from "../../assets/images/bg.jpg";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal } from "antd";
const Login = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onLogin = () => {
    event.preventDefault();
    navigate("/home");
  };
  const openLoginPanel = () => {
    setStatus(true);
  };
  const handleCancel = () => {
    setStatus(false);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus(false);
    }, 3000);
  };
  return (
    <div className="login-container">
      <Button type="primary" onClick={openLoginPanel}>
        Đăng nhập
      </Button>
      <Modal
        open={status}
        title="Đăng nhập"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy bỏ
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Đăng nhập
          </Button>
        ]}
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleOk}
          layout="vertical" 
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
