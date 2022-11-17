import React from "react";
import Dropdown from "./Dropdown";
import { ReactComponent as IconClose } from "../assets/images/icon-close-menu.svg";
import Wrapper from "./styled/Sidebar.styled";

const Sidebar = ({ closeSidebar }) => {
  return (
    <Wrapper className="sidebar">
      <button className="btn sidebar-btn" onClick={closeSidebar}>
        <IconClose className="menu-icon" />
      </button>
      <Dropdown />
      <div className="btns-container">
        <button className="btn nav-btn">Login</button>
        <button className="btn nav-btn nav-btn-border">Register</button>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
