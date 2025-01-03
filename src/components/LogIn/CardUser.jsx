import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CardUser = ({ logout }) => {
  const account = JSON.parse(localStorage.getItem("account"));
  const UserName = account ? account.username : "";
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/account">
          <span>Quản lý tài khoản</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3" danger onClick={logout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button style={{ maxWidth: 200 }}>
          <div data-tooltip={UserName} class="username">
            {UserName}
          </div>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default CardUser;
