import React from "react";
import "./TopNavBar.css";
import logo from "../assets/Logomark.png";


const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo-icon" />
        <span className="logo-text">Untitled UI</span>
      </div>
      <div className="menu-icon">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </div>
  );
};

export default TopNavBar;
