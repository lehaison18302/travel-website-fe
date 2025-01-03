import React, { useState } from "react";
import bgLogin from "../../assets/images/bg.jpg";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal } from "antd";
const Login = ({setLogin}) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onLogin = () => {
    event.preventDefault();
    navigate("/home");
  };
  const openLoginPanel = () => {
    setOpenLogin(true);
  };
  const openSignUpPanel = () => {
    setOpenSignUp(true);
  };
  const handleCancelLogin = () => {
    setOpenLogin(false);
  };
  const handleSubmitLogin = (values) => {
    setLoading(true);
    // Fake account data
    const accountData = {
      username: username,
      password: password,
      id: Date.now()
    };

    // Save to localStorage
    localStorage.setItem("account", JSON.stringify(accountData));
    console.log("đã lưu thành công", accountData);
    setTimeout(() => {
      setLoading(false);
      setOpenLogin(false);
      setLogin(true);
    }, 3000);
  };
  const handleCancelSignUp = () => {
    setOpenSignUp(false);
  };
  const handleSubmitSignup = (values) => {
    if (checkAccountExists()) {
      alert("Tài khoản đã tồn tại!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", values);
      const accountData = {
        username: values.username,
        password: values.password,
        id: Date.now()
      };

      localStorage.setItem("account", JSON.stringify(accountData));
      console.log("Account saved to localStorage:", accountData);
      setLoading(false);
      setOpenSignUp(false);
      setLogin(true);
    }, 3000);
  };
  const checkAccountExists = () => {
    const account = localStorage.getItem("account");
    if (account) {
      console.log("Account exists:", JSON.parse(account));
      return true;
    } else {
      console.log("No account found in localStorage.");
      return false;
    }
  };
  return (
    <div className="login-container flex" style={{ gap: 8 }}>
      <Button onClick={openSignUpPanel}>Đăng ký</Button>
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
        onOk={handleSubmitLogin}
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
          </Button>
        ]}
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleSubmitLogin}
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
            <Input onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)}/>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        open={openSignUp}
        title={
          <strong
            style={{ display: "flex", justifyContent: "center", fontSize: 20 }}
          >
            Đăng ký
          </strong>
        }
        onOk={handleSubmitSignup}
        onCancel={handleCancelSignUp}
        footer={[
          <Button key="back" onClick={handleCancelSignUp}>
            Hủy bỏ
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleSubmitSignup}
          >
            Đăng ký
          </Button>
        ]}
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleSubmitSignup}
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
            <Input onChange={(e) => setUsername(e.target.value)}/>
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Vui lòng nhập lại mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu nhập lại không khớp!")
                  );
                }
              })
            ]}
          >
            <Input.Password placeholder="Nhập lại mật khẩu" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
