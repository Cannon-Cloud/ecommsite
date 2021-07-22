import React, { useState } from "react";

import { Menu } from "antd";
import {
  CodeOutlined,
  SettingOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();
  let history = useHistory();

  const handleClick = (event) => {
    setCurrent(event.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<CodeOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Settings">
        <Item key="setting:1">Dashboard</Item>
        <Item key="setting:2">Login</Item>
        <Item icon={<LogoutOutlined />} onClick={logout} key="logout">
          Logout
        </Item>
      </SubMenu>

      <Item key="regsiter" className="float-end" icon={<UserAddOutlined />}>
        <Link className="float-end" to="/register">
          Register
        </Link>
      </Item>
      <Item
        key="login"
        icon={<LoginOutlined />}
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
