import React from "react";
import "./Sidebar.css";

const Sidebar = React.memo(({ isOpen, onClose }) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <button
          className="close-btn"
          aria-label="Close sidebar"
          onClick={onClose}
        >
          &times;
        </button>
        <h2>Welcome</h2>
        <div className="sidebar-buttons">
          <button className="login-btn" onClick={() => alert("Log In clicked")}>
            Log In
          </button>
          <button className="join-btn" onClick={() => alert("Join Us clicked")}>
            Join Us
          </button>
        </div>
      </aside>

      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
      />
    </>
  );
});

export default Sidebar;
