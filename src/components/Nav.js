import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

import logo from "../img/Logo Institut .png";

function Nav() {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logo} alt="logo de l'institut" />
      </div>
      <ul className="navLinks">
        <NavLink exact activeClassName="current" to="/" className="link">
          <li>Accueil</li>
        </NavLink>

        <NavLink
          exact
          activeClassName="current"
          to="actualites"
          className="link"
        >
          <li>Notre Actualites</li>
        </NavLink>

        <NavLink
          exact
          activeClassName="current"
          to="formations"
          className="link"
        >
          <li>Nos Formations</li>
        </NavLink>

        <NavLink
          exact
          activeClassName="current"
          to="solutions"
          className="link"
        >
          <li>Nos Solutions</li>
        </NavLink>

        <NavLink
          exact
          activeClassName="current"
          to="engagements"
          className="link"
        >
          <li>Nos Engagements</li>
        </NavLink>

        <NavLink exact activeClassName="current" to="contact" className="link">
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="contact">
        <p>
          <strong>Quartier Pointe Athanase</strong>
        </p>
        <p style={{ fontSize: 12 }}> 97280 LE VAUCLIN, Martinique</p>
        <p>Tel:</p>
        <p>Mail:</p>
      </div>
    </nav>
  );
}

export default Nav;
