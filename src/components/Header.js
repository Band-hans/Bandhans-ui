import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import logo from "./Images/logo.jpeg";
import { FiSearch, FiX } from "react-icons/fi";
import Sidebar from "./Sidebar";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const searchRef = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchTerm("");
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      closeSearch();
    }
  };

  useEffect(() => {
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  const toggleMenu = () => {
    setSidebarOpen(true);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="Bandhans Logo" className="logo-img" />
          </div>

          <div className="icon-group" ref={searchRef}>
            {!searchOpen ? (
              <button className="search-icon" onClick={handleSearchClick}>
                <FiSearch size={20} />
              </button>
            ) : (
              <div className="search-bar-expanded">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button className="close-icon" onClick={closeSearch}>
                  <FiX size={18} />
                </button>
              </div>
            )}

            {isMobile ? (
              <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <div className="desktop-buttons">
                <button className="login-btn">Log In</button>
                <button className="join-btn">Join Us</button>
              </div>
            )}
          </div>
        </div>
      </header>

      {isMobile && (
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}
    </>
  );
}

export default Header;
