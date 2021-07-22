import React, { useState } from "react";

import { Menu } from "antd";
import {
  CodeOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item className="float-start" key="home" icon={<CodeOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <SubMenu
        className="float-start"
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Settings"
      >
        <Item key="setting:1">Dashboard</Item>
        <Item key="setting:2">Login</Item>
      </SubMenu>

      <Item key="regsiter" className="float-end" icon={<UserAddOutlined />}>
        <Link className="float-end" to="/register">
          Register
        </Link>
      </Item>
      <Item
        key="login"
        icon={<UserOutlined />}
        className="float-end"
        style={{ float: "right" }}
      >
        <Link className="float-end" to="/login">
          Login
        </Link>
      </Item>
    </Menu>
  );
};

export default Header;
