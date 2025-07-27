// React and progress bar imports
import React from "react";
import "./VendorMonitor.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import growthIcon from "../assets/trend-up-01.png";
import upgradeIcon from "../assets/upgrade.png";

// Vendor monitor card component
const VendorMonitor = () => {
  // Usage and growth values
  const used = 240;
  const total = 300;
  const percentUsed = Math.round((used / total) * 100);
  const growth = 10;

  return (
    <div className="card">
      {/* Header section with title and menu icon */}
      <div className="card-header">
        <div>
          <p className="title">Vendors monitored</p>
          <p className="subtitle">
            You're using {percentUsed}% of available spots.
          </p>
        </div>
        <div className="menu-icon">⋮</div>
      </div>
      <hr className="vendor-divider" />

      {/* Progress bar and growth section */}
      <div className="progress-section">
        <div className="progress-wrapper">
          <div className="progress-semiCircle">
            <CircularProgressbarWithChildren
              value={percentUsed}
              circleRatio={0.5}
              styles={buildStyles({
                rotation: 0.75,
                strokeLinecap: "round",
                trailColor: "#E5E7EB",
                pathColor: "#9e77ed",
                strokeWidth: 38,
              })}
            >
              <div className="progress-value">{used}</div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="growth">
          <span className="growth-icon">
            <img
              src={growthIcon}
              alt="Growth"
              style={{ width: "16px", height: "16px", marginTop: "8px" }}
            />
          </span>

          <span className="growth-value" style={{ fontSize: "16px" }}>
            {growth}%
          </span>
        </div>
      </div>

      {/* Footer text section */}
      <div className="footer-text">
        <p className="limit-title">You’ve almost reached your limit</p>
        <p className="limit-subtitle">
          You have used {percentUsed}% of your available spots.
        </p>
        <p className="limit-subtitle">Upgrade plan to monitor more vendors.</p>
      </div>

      <hr className="vendor-divider" />

      {/* Upgrade button section */}
      <div className="button-wrapper">
        <button className="upgrade-btn">
          {" "}
          <img src={upgradeIcon} alt="Growth" /> Upgrade plan
        </button>
      </div>
    </div>
  );
};

export default VendorMonitor;
