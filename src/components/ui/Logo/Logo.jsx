import React from "react";
import logoImg from "../../../imgs/logo.png";
import './Logo.css';

function Logo() {
  return (
    <div className="logo">
      <div className="logo__img">
        <img src={logoImg} alt="" className="logo--img" />
      </div>
    </div>
  );
}

export default Logo;
