import React from "react";
import { Bag, ProfileIcon, WhishListIcon } from "../../../imgs/header-nav";
import './HeaderBtns.css'

function HeaderBtns() {
  return <div className="header__middle_btns">
     <div className="header__middle_btns-btn"> <Bag /> </div>
     <div className="header__middle_btns-btn"> <WhishListIcon /></div>
     <div className="header__middle_btns-btn"> <ProfileIcon /></div>
  </div>;
}

export default HeaderBtns;
