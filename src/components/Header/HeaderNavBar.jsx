import React from "react";
import {
  BedroomIcon,
  ChildrensroomIcon,
  ClosetIcon,
  KitchenIcon,
  LivingroomIcon,
  OfficeIcon,
} from "../../imgs/header-nav";

function HeaderNavBar() {
  return (
    
      <div className="header__navbar__menu">
        <nav className="navbar__menu">
          <ul className="navbar__menu--ul">
            <li className="navbar__menu--li">
              <KitchenIcon />
              <span className="navbar__menu--txt">Кухни</span>
            </li>
            <li className="navbar__menu--li">
              <BedroomIcon />
              <span className="navbar__menu--txt">Спальни</span>
            </li>
            <li className="navbar__menu--li">
              <LivingroomIcon />
              <span className="navbar__menu--txt">Гостинные</span>
            </li>
            <li className="navbar__menu--li">
              <ClosetIcon />
              <span className="navbar__menu--txt">Прихожие</span>
            </li>
            <li className="navbar__menu--li">
              <OfficeIcon />
              <span className="navbar__menu--txt">Офиссная мебель</span>
            </li>
            <li className="navbar__menu--li">
              <ChildrensroomIcon />
              <span className="navbar__menu--txt">Детская</span>
            </li>
            <li className="navbar__menu--li">
              <span className="navbar__menu--txt">Акции</span>
            </li>
            <li className="navbar__menu--li three-dots">&#10247;</li>
          </ul>
        </nav>
      </div>
    
  );
}

export default HeaderNavBar;
