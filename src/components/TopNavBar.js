import React from "react";
import "./TopNavBar.css";
import logo from "../assets/Logomark.png";
import topbarIcon from "../assets/topbarCollapse.png";

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo-icon" />
        <span className="logo-text">Untitled UI</span>
      </div>
      <div className="menu-icon">
        <img src={topbarIcon} alt="topbarIcon" />
      </div>
    </div>
  );
};

export default TopNavBar;
