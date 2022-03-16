import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";

function HeaderTop() {
  return (
    <div className="header__top">
      <HeaderNav />
      <div className="header__top--right">
        <div className="phone_number">
          <i class="fas fa-phone-alt"></i>8 (964) 89 99 119
        </div>
        <div className="deliver--div">
          <i class="fas fa-truck-moving"></i>Доставка
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
