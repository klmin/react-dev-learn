import React from "react";
import { NavLink } from "react-router-dom";

// ✅ 스타일을 적용하는 함수 생성 (재사용 가능)
const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
});

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" style={navLinkStyle}>home</NavLink></li>
        <li><NavLink to="/about"  style={navLinkStyle}>About</NavLink></li>
        <li><NavLink to="/counter" style={navLinkStyle} >Counter</NavLink></li>
        <li><NavLink to="/list" style={navLinkStyle} >List</NavLink></li>
        <li><NavLink to="/window-size" style={navLinkStyle} >Window Size</NavLink></li>
        <li><NavLink to="/users" style={navLinkStyle}>Users</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;