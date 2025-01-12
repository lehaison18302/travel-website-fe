import { Alert, Avatar, Button, Form, Input } from "antd";
import { useState } from "react";
import { listAVT } from "src/constants/constant";

const Information = () => {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSaveInfo = () => {
    console.log("save");
  };
  return (
    <div className="account-info-card">
      <Avatar
        size={{
          xs: 24,
          sm: 32,
          md: 40,
          lg: 64,
          xl: 80,
          xxl: 100
        }}
        src={listAVT[0]?.src}
      />
      <Form
        name="login"
        onFinish={handleSaveInfo}
        layout="horizontal"
        style={{ width: "100%" }}
        size={"lagre"}
        labelCol={{
          span: 6
        }}
        wrapperCol={{
          span: 12
        }}
      >
        <strong
          style={{ justifyContent: "center", fontSize: 18, margin: 8 }}
          className="flex"
        >
          Thông tin cá nhân
        </strong>
        <Form.Item
          label="Họ tên"
          name="displayName"
          rules={[{ type: "email", message: "Email không hợp lệ!" }]}
        >
          <Input disabled />
        </Form.Item>
        <strong
          style={{ justifyContent: "center", fontSize: 18, margin: 8 }}
          className="flex"
        >
        </strong>
        <Form.Item label="Username" name="userName">
          <Input onChange={(e) => setFirstName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input onChange={(e) => setFirstName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input onChange={(e) => setFirstName(e.target.value)} />
        </Form.Item>
        <Form.Item label=" ">
          <div className="flex" style={{ justifyContent: "center" }}>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Information;
