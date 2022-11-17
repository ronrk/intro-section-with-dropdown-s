import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";

import Dropdown from "./Dropdown";
import Wrapper from "./styled/Navbar.styled";

const Navbar = ({ isSidebarOpen, openSidebar, closeSidebar }) => {
  return (
    <Wrapper className="navbar">
      <Logo className="nav__logo" />
      <Dropdown />
      <div className="btns-container">
        <button className="btn nav-btn">Login</button>
        <button className="btn nav-btn nav-btn-border">Register</button>
      </div>
      {!isSidebarOpen ? (
        <button className="btn sidebar-btn" onClick={openSidebar}>
          <IconMenu className="menu-icon" />
        </button>
      ) : null}
    </Wrapper>
  );
};

export default Navbar;
