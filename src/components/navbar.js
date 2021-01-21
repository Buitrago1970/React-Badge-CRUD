import React from "react";

import "./styles/Navbar.css";
import logo from "../images/McDonalds-Logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <a className="Navbar__brand" href="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">Burguer</span>
          <span className="font-weight-bold">King</span>
        </a>
      </div>
    );
  }
}
export default Navbar;
