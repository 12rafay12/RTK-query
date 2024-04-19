import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const items = [
  {
    label: "List",
    key: "/",
    icon: <MailOutlined />,
  },
  {
    label: "Add New",
    key: "/NewForm",
    icon: <AppstoreOutlined />,
  },
];
const Nav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.key}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default Nav;
