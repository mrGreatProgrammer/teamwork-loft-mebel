import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <nav className="header__nav">
      <li className="header__nav--li">
        <NavLink className="header__nav--link" to="/">
          главная
        </NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink className="header__nav--link" to="/aboutus">
          О нас
        </NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink className="header__nav--link" to="/contacts">
          Контакты
        </NavLink>
      </li>
    </nav>
  );
}

export default HeaderNav;
