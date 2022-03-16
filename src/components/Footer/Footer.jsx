import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <div className="header__navigation">
          <h1>НАВИГАЦИЯ</h1>
          <nav className="footer__nav--nav">
            <ul>
              <NavLink className="footer__navlink--link" to="/kitchen">
                <li className="footer__navlink--item">Кухни</li>
              </NavLink>
              <NavLink className="footer__navlink--link" to="/sleeping">
                <li className="footer__navlink--item">Спальни</li>
              </NavLink>
              <NavLink className="footer__navlink--link" to="/livingrooms">
                <li className="footer__navlink--item">Гостинные</li>
              </NavLink>
            </ul>
            <ul>
              <NavLink className="footer__navlink--link" to="/hallways">
                <li className="footer__navlink--item">Прихожие</li>
              </NavLink>
              <NavLink className="footer__navlink--link" to="/officefurniture">
                <li className="footer__navlink--item">Офисная мебель</li>
              </NavLink>
              <NavLink className="footer__navlink--link" to="/children's">
                <li className="footer__navlink--item">Детская</li>
              </NavLink>
            </ul>
            <ul>
              <NavLink className="footer__navlink--link" to="/cabinets">
                <li className="footer__navlink--item">Шкафы</li>
              </NavLink>
              <NavLink className="footer__navlink--link" to="/matresses">
                <li className="footer__navlink--item">Матрасы</li>
              </NavLink>
              <NavLink
                className="footer__navlink--link"
                to="/cushionedfurniture"
              >
                <li className="footer__navlink--item">Мягкая мебель</li>
              </NavLink>
            </ul>
          </nav>
          <div className="footer__nav--logo">
            <nav className="nav__logo--lm">
              LM
            </nav>
          </div>
        </div>
        <div className="sale">
          <ul className="footer__nav--ul">
            <NavLink className="footer__sale--link" to="/sale">
              <li className="footer__sale--sale">Акция</li>
            </NavLink>
            <NavLink className="footer__sale--link" to="/new">
              <li className="footer__sale--link">Новинки</li>
            </NavLink>
            <NavLink className="footer__sale--link" to="/new">
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <li className="footer__sale--link">8 (964) 89 99 119</li>
            </NavLink>
            <NavLink className="footer__sale--link" to="/new">
              <li className="footer__sale--link">INSTAGRAM</li>
            </NavLink>
            <NavLink className="footer__sale--link" to="/new">
              <li className="footer__sale--link">mebel_loft_anapa@mail.ru</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
