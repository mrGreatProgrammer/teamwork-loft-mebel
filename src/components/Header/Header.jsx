import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo/Logo";
import Searcher from "../ui/Searcher/Searcher";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <nav>
          <NavLink to="/">главная</NavLink>
          <NavLink to="/user">О нас</NavLink>
        </nav>
      </div>
      <div className="header__middle">
        <Logo /> <Searcher /> <div className="header__biddle_btns"></div>
      </div>
      <div className="header__bottom"></div>
    </header>
  );
}

export default Header;
