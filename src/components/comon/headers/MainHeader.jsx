import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1" link="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" link="/blog">
        <Link to="/Blogs">Blog</Link>
      </Menu.Item>
      <Menu.Item key="3" link="/form">
        <Link to="/Signup">Sign Up</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
