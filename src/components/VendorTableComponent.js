import React, { useState } from "react";
import { FaSearch, FaFilter, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./VendorTable.css";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import importIcon from "../assets/import.png";
import shortcutIcon from "../assets/shortcut.png";
import filterLines from "../assets/filterLines.png";
import useIsMobile from "./useIsMobile";

const vendors = [
  {
    name: "Ephemeral",
    domain: "ephemeral.io",
    icon: "/icons/ephemeral.svg",
    rating: 60,
    trend: 5,
    trendNature: "positive",
    lastAccessed: "22 Jan 2025",
    categories: ["Active", "Customer data", "Admin", "+4"],
    selected: true,
    img: img1,
  },
  {
    name: "Stack3d Lab",
    domain: "stack3dlab.com",
    icon: "/icons/stack3d.svg",
    rating: 72,
    trend: 4,
    trendNature: "negative",
    lastAccessed: "20 Jan 2025",
    categories: ["Active", "Business data", "Admin", "+4"],
    selected: true,
    img: img2,
  },
  {
    name: "WarpSpeed",
    domain: "getwarpspeed.com",
    icon: "/icons/warp.svg",
    rating: 78,
    trend: 6,
    trendNature: "positive",
    lastAccessed: "24 Jan 2025",
    categories: ["Active", "Customer data", "Financials"],
    selected: true,
    img: img3,
  },
  {
    name: "CloudWatch",
    domain: "cloudwatch.app",
    icon: "/icons/cloudwatch.svg",
    rating: 38,
    trend: 8,
    trendNature: "positive",
    lastAccessed: "26 Jan 2025",
    categories: ["Active", "Database access", "Admin"],
    selected: false,
    img: img4,
  },
  {
    name: "ContrastAI",
    domain: "contrastai.com",
    icon: "/icons/contrastai.svg",
    rating: 42,
    trend: 1,
    trendNature: "negative",
    lastAccessed: "18 Jan 2025",
    categories: ["Active", "Salesforce", "Admin", "+4"],
    selected: false,
    img: img5,
  },
  {
    name: "Convergence",
    domain: "convergence.io",
    icon: "/icons/convergence.svg",
    rating: 66,
    trend: 6,
    trendNature: "negative",
    lastAccessed: "28 Jan 2025",
    categories: ["Active", "Business data", "Admin", "+4"],
    selected: true,
    img: img6,
  },
  {
    name: "Sisyphus",
    domain: "sisyphus.com",
    icon: "/icons/sisyphus.svg",
    rating: 91,
    trend: 2,
    trendNature: "positive",
    lastAccessed: "16 Jan 2025",
    categories: ["Inactive", "Customer data", "Financials"],
    selected: true,
    img: img7,
  },
];

// Helper to extract status info
const getStatusInfo = (categories) => {
  const idx = categories.findIndex((c) => c === "Active" || c === "Inactive");
  if (idx === -1) return { color: "#ccc", label: "" };
  const label = categories[idx];
  return {
    color: label === "Active" ? "#2ecc40" : "#aaa",
    label,
  };
};

const VendorTable = () => {
  const isMobile = useIsMobile();
  const [headerChecked, setHeaderChecked] = useState(false);

  return (
    <div className="vendor-container">
      {/* Header */}
      <div className="action-header">
        <div>
          <h2>
            Vendor movements <span className="badge">240 vendors</span>
          </h2>
          <p>Keep track of vendor and their security ratings</p>
        </div>

        <div className="header-actions">
          <button className="btn" style={{ height: "28px" }}>
            <span>
              <img src={importIcon} alt="import" style={{ height: "12px" }} />
            </span>{" "}
            Import
          </button>
          <button className="btn primary-btn">+ Add vendor</button>
        </div>
      </div>
      <div className="row-rule" />
      {/* Controls */}
      <div className="vendor-controls">
        <div className="left-controls">
          <div className="view-buttons">
            <button className="view-btn active">View all</button>
            <button className="view-btn">Monitored</button>
            <button className="view-btn">Unmonitored</button>
          </div>
        </div>
        <div className="right-controls">
          <div className="search-box">
            <FaSearch style={{ color: "gray" }} />
            <input type="text" placeholder="Search" />
            <span className="shortcut-icon">
              <img
                src={shortcutIcon}
                alt="shortcut"
                className="shortcut-icon-img"
              />
            </span>
          </div>
          <button className="filter-btn">
            {isMobile ? <img src={filterLines} alt="filterLines" /> : "Filters"}
            {/* <FaFilter />  */}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="vendor-table">
          <thead className="table-header">
            <tr>
              <th style={{marginLeft:"20px"}}>
                <input
                  type="checkbox"
                  className={`custom-checkbox ${
                    headerChecked ? "checkbox-minus" : ""
                  }`}
                  checked={headerChecked}
                  onChange={() => setHeaderChecked(!headerChecked)}
                  
                />
              </th>
              <th>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <div>Vendor </div>
                  <div>
                    <FaArrowDown />
                  </div>
                </div>
              </th>
              <th>Rating</th>
              <th>Last assessed</th>
              <th>Categories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => {
              const isLast = index === vendors.length - 1;
              const { color: statusColor, label: statusLabel } = getStatusInfo(
                vendor.categories
              );
              const showTrend =
                typeof vendor.trend === "number" &&
                vendor.trend !== 0 &&
                !isMobile;
              return (
                <React.Fragment key={index}>
                  <tr className="vendor-row">
                    <td>
                      <input type="checkbox" className="custom-checkbox" />
                    </td>
                    <td>
                      <div className="vendor-info">
                        <img src={vendor.img} className="vendor-icon" alt="" />
                        <div>
                          <div className="vendor-name">{vendor.name}</div>
                          <div className="vendor-domain">{vendor.domain}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div className="rating-bar">
                          <div
                            className="rating-fill"
                            style={{
                              width: `${vendor.rating}%`,
                              backgroundColor: "#9e77ed",
                            }}
                          ></div>
                        </div>
                        <div className="rating-score">{vendor.rating}</div>
                        {showTrend && (
                          <span
                            className={`trend-badge ${
                              vendor.trendNature == "positive"
                                ? "trend-up"
                                : "trend-down"
                            }`}
                          >
                            <span
                              style={{
                                display: "flex",
                                gap: "4px",
                                alignItems: "center",
                                padding: "2px",
                                fontSize: "12px",
                                fontWeight: "400",
                              }}
                            >
                              {vendor.trendNature == "positive" ? (
                                <FaArrowUp style={{ color: "green" }} />
                              ) : (
                                <FaArrowDown style={{ color: "red" }} />
                              )}
                              {vendor.trend}%
                            </span>
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="no-wrap">{vendor.lastAccessed}</td>
                    <td>
                      <div className="categories-badges">
                        {vendor.categories.map((cat, i) => (
                          <span className="badge">
                            {cat == "Active" ? (
                              <span className="badge-dot"></span>
                            ) : (
                              ""
                            )}
                            {cat == "Inactive" ? (
                              <span className="badge-dot-red"></span>
                            ) : (
                              ""
                            )}
                            <span key={i}>{cat}</span>
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="edit-delete-icons">
                      <FiEdit2
                        style={{
                          marginRight: 10,
                          cursor: "pointer",
                          color: "#A4A7AE",
                        }}
                      />
                      <RiDeleteBinLine
                        style={{ cursor: "pointer", color: "#A4A7AE" }}
                      />
                    </td>
                  </tr>
                  {!isLast && (
                    <tr className="row-divider">
                      <td colSpan={6}>
                        <div className="row-rule" />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <hr className="divider" />
      <div style={{margin:"16px"}}>
        <div
          className={isMobile ? "pagination mobile-pagination" : "pagination"}
        >
          {isMobile ? (
            <>
              <button className="nav-btn">
                <FaArrowLeft />
              </button>
              <div className="page-info">Page 1 of 10</div>
              <button className="nav-btn" style={{ marginRight: "5px" }}>
                <FaArrowRight />
              </button>
            </>
          ) : (
            <>
              <div className="page-info">Page 1 of 10</div>
              <div className="page-buttons">
                <button className="nav-btn">Previous</button>
                <button className="nav-btn">Next</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorTable;
