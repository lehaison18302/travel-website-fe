import React, { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal } from "antd";

const Login = ({ setLogin }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitLogin = async () => {
    setLoading(true);
    try {
      // Gửi yêu cầu POST tới server
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      // Lưu accessToken vào localStorage
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      console.log("Access token saved:", accessToken);

      // Đặt trạng thái đăng nhập
      setLogin(true);

      // Điều hướng tới trang /home
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản!");
    } finally {
      setLoading(false);
      setOpenLogin(false);
    }
  };

  const openLoginPanel = () => {
    setOpenLogin(true);
  };

  const handleCancelLogin = () => {
    setOpenLogin(false);
  };

  return (
    <div className="login-container flex" style={{ gap: 8 }}>
      <Button type="primary" onClick={openLoginPanel}>
        Đăng nhập
      </Button>
      <Modal
        open={openLogin}
        title={
          <strong
            style={{ display: "flex", justifyContent: "center", fontSize: 20 }}
          >
            Đăng nhập
          </strong>
        }
        onCancel={handleCancelLogin}
        footer={[
          <Button key="back" onClick={handleCancelLogin}>
            Hủy bỏ
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleSubmitLogin}
          >
            Đăng nhập
          </Button>,
        ]}
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleSubmitLogin}
          layout="vertical"
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên tài khoản!" }]}
          >
            <Input onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
