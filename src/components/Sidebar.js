import React from "react";
import "./Sidebar.css";
import LogoMark from "../assets/Logomark.png";

import itemHome from "../assets/itemHome.png";
import itemContact from "../assets/itemContact.png";
import itemChart from "../assets/itemChart.png";
import itemCheck from "../assets/itemCheck.png";
import itemBar from "../assets/itemBar.png";
import itemStat from "../assets/itemStat.png";
import itemDrive from "../assets/itemDrive.png";
import itemSetting from "../assets/itemSetting.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="icon active">
          <img src={LogoMark} alt="logo" />
        </div>
        <div className="icon">
          <img src={itemHome} alt="logo" />
        </div>
        <div className="icon">
          <img src={itemStat} alt="logo" />
        </div>
        <div className="icon">
          <img src={itemBar} alt="logo" />
        </div>
        <div className="icon">
          <img src={itemCheck} alt="logo" />
        </div>
        <div className="icon">
          <img src={itemChart} alt="logo" />
        </div>
        <div className="icon">
          <img src={itemContact} alt="logo" />
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="icon">
          <img src={itemDrive} alt="logo" />
        </div>
        <div className="icon">
          <img src={itemSetting} alt="logo" />
        </div>
        <div className="avatar-wrapper">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User Avatar"
            className="avatar"
          />
          <div className="status-dot">1</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
