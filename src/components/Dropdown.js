import React from "react";
import Wrapper from "./styled/Dropdown.styled";

import { ReactComponent as IconArrowDown } from "../assets/images/icon-arrow-down.svg";
import { ReactComponent as IconArrowUp } from "../assets/images/icon-arrow-up.svg";
import { ReactComponent as IconTodo } from "../assets/images/icon-todo.svg";
import { ReactComponent as IconCalendar } from "../assets/images/icon-calendar.svg";
import { ReactComponent as IconPlanning } from "../assets/images/icon-planning.svg";
import { ReactComponent as IconReminders } from "../assets/images/icon-reminders.svg";

const Dropdown = () => {
  return (
    <Wrapper className="dropdown">
      <li className="nav__sublinks">
        <div>
          <span className="nav__sublinks-title">Features</span>
          <IconArrowDown className="nav__icon-arrow" />
        </div>

        <ul className="sublist">
          <li>
            <IconTodo className="sublink-icon" /> <a href="#">Todo List</a>
          </li>
          <li>
            <IconCalendar className="sublink-icon" /> <a href="#">Calendar</a>
          </li>
          <li>
            <IconReminders className="sublink-icon" /> <a href="#">Reminders</a>
          </li>
          <li>
            <IconPlanning className="sublink-icon" /> <a href="#">Planning</a>
          </li>
        </ul>
      </li>

      <li className="nav__sublinks">
        <div>
          <span className="nav__sublinks-title">Company</span>
          <IconArrowDown className="nav__icon-arrow" />
        </div>

        <ul className="sublist">
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </li>

      <li className="nav__link">
        <a href="#">Careers</a>
      </li>

      <li className="nav__link">
        <a href="#">About</a>
      </li>
    </Wrapper>
  );
};

export default Dropdown;
