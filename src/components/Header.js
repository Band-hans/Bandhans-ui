import React from "react";
import "./Header.css";
import logo from "./Images/logo.jpeg"; // ✅ correct relative import

function Header() {
  const toggleMenu = () => {
    console.log("Menu toggled"); // You can implement actual logic here
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Bandhans Logo" className="logo-img" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
