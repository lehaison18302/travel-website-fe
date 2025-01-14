import { Alert, Avatar, Button, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import apiCommon from "src/apis/functionApi";
import { listAVT } from "src/constants/constant";

const Information = () => {
  const account = JSON.parse(localStorage.getItem("accessToken"));
  const [displayName, setDisplayName] = useState(account.displayName);
  const [username, setUsername] = useState(account.username);
  const [email, setEmail] = useState(account.email);
  const [password, setPassword] = useState(account.password);
  useEffect(() => {

    setDisplayName(account.displayName);
    setUsername(account.username);
    setEmail(account.email);
    setPassword(account.password);

  })

  const handleSaveInfo = () => {
    let data = {
      email,
      displayName,
      password
    }
    try {
      apiCommon.updateInfoUser(data).then(res => {
        if (!res) {
          message.error("Cập nhật thông tin thất bại")
        } else {
          console.log("save", data);
          message.success("Cập nhật thông tin thành công")
        }
      })
    } catch (err) {
      console.error(err.message);
    }
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
        <Form.Item label="Username" name="userName">
          <Input defaultValue={username} disabled />
        </Form.Item>

        <strong style={{ justifyContent: "center", fontSize: 18, margin: 8 }} className="flex"></strong>
        <Form.Item
          label="Họ tên"
          name="displayName"
        >
          <Input defaultValue={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item type="password" label="Password" name="password">
          <Input.Password defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <div className="flex" style={{ justifyContent: "center" }}>
          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Information;
