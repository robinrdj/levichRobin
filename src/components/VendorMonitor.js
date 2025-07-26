import React from "react";
import "./VendorMonitor.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import growthIcon from "../assets/trend-up-01.png";
import upgradeIcon from "../assets/upgrade.png";

const VendorMonitor = () => {
  const used = 240;
  const total = 300;
  const percentUsed = Math.round((used / total) * 100);
  const growth = 10;

  return (
    <div className="card">
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
              style={{ width: "20px", height: "20px", marginTop: "8px" }}
            />
          </span>

          <span className="growth-value" style={{ fontSize: "18px" }}>
            {growth}%
          </span>
        </div>
      </div>

      <div className="footer-text">
        <p className="limit-title">You’ve almost reached your limit</p>
        <p className="limit-subtitle">
          You have used {percentUsed}% of your available spots.
        </p>
        <p className="limit-subtitle">Upgrade plan to monitor more vendors.</p>
      </div>

<hr className="vendor-divider" />

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
