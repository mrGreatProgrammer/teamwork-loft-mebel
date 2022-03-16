import React from "react";
import {
  BedroomIcon,
  KitchenIcon,
  LivingroomIcon,
  ClosetIcon,
  OfficeIcon,
  ChildrensroomIcon,
} from "../../imgs/header-nav";
import Logo from "../ui/Logo/Logo";
import Searcher from "../ui/Searcher/Searcher";
import "./Header.css";
import HeaderBtns from "./HeaderBtns/HeaderBtns";
import HeaderNavBar from "./HeaderNavBar";
import HeaderTop from "./HeaderTop";

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <div className="wrapper">
        <div className="header__middle">
          <Logo /> <Searcher /> <HeaderBtns />
        </div>
      </div>
      <div className="wrapper">
        <div className="header__bottom">
          <HeaderNavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
