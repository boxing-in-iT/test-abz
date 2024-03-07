import React from "react";
import logo from "../../assets/img/Logo.svg";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src={logo} />
        <div className="header-button-section">
          <button className="header-button">Users</button>
          <button className="header-button">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
