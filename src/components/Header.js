import React from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import customiseIcon from "../assets/customiseIcon.png";
import useIsMobile from "./useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <div className="header-container">
      <div className="header-title">Welcome back, Olivia</div>
      <div className="header-actions">
        {isMobile ? (
          ""
        ) : (
          <button className="header-search" aria-label="Search">
            <FiSearch />
          </button>
        )}
        <button className="header-btn">
          <span header-btn-span>
            <img
              src={customiseIcon}
              alt="customiseIcon"
              className="customise-icon-img"
            />
            <span className="header-btn-text" style={{ marginLeft: "6px" }}>
              Customize
            </span>
          </span>
        </button>
        <button className="header-btn">Export</button>
      </div>
    </div>
  );
};

export default Header;
