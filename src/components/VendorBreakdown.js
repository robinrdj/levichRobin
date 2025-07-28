// React and chart imports
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import useIsMobile from "./useIsMobile";
import vendorLogo from "../assets/vendorLogo.png";
import "./VendorBreakdown.css";

// Chart data for each month
const data = [
  { month: "Jan", low: 25, medium: 30, high: 25 },
  { month: "Feb", low: 30, medium: 35, high: 25 },
  { month: "Mar", low: 22, medium: 28, high: 20 },
  { month: "Apr", low: 28, medium: 30, high: 22 },
  { month: "May", low: 30, medium: 30, high: 20 },
  { month: "Jun", low: 32, medium: 30, high: 25 },
  { month: "Jul", low: 28, medium: 32, high: 20 },
  { month: "Aug", low: 34, medium: 30, high: 22 },
  { month: "Sep", low: 30, medium: 28, high: 22 },
  { month: "Oct", low: 32, medium: 30, high: 25 },
  { month: "Nov", low: 35, medium: 30, high: 28 },
  { month: "Dec", low: 32, medium: 28, high: 25 },
];

// Vendor breakdown card component
const VendorBreakdown = () => {
  const isMobile = useIsMobile();
  const barSize = isMobile ? 16 : 32;

  return (
    <div className="vendor-card">
      {/* Header with logo and title */}
      <div
        className="vendor-header"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <img src={vendorLogo} alt="Vendor Logo" className="vendorImage" />
        </div>
        <div>
          <h4>Vendor breakdown</h4>
          <p>Keep track of vendors and their security ratings.</p>
        </div>
      </div>

      <hr className="vendor-divider" />

      {/* Chart section */}
      <div className="vendor-chart">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{
                fontWeight: 400,
                fontSize: 12,
                fill: "#535862",
              }}
            >
              <Label
                value="Month"
                offset={-5}
                position="insideBottom"
                style={{
                  fontSize: 12,
                  fill: "#535862",
                  fontWeight: 500,
                }}
              />
            </XAxis>
            <YAxis>
              <Label
                value="Security rating"
                angle={-90}
                position="insideLeft"
                style={{
                  textAnchor: "middle",
                  fontSize: 13,
                  fill: "#535862",
                  fontWeight: 500,
                }}
              />
            </YAxis>
            <Tooltip />
            {/* Low, medium, high bars */}
            <Bar
              dataKey="low"
              stackId="a"
              fill="#6941C6"
              barSize={barSize}
              radius={isMobile ? [4, 4, 0, 0] : [0, 0, 0, 0]}
            />
            <Bar
              dataKey="medium"
              stackId="a"
              fill="#9E77ED"
              barSize={barSize}
              radius={isMobile ? [4, 4, 0, 0] : [0, 0, 0, 0]}
            />
            <Bar
              dataKey="high"
              stackId="a"
              fill="#E9EAEB"
              barSize={barSize}
              radius={isMobile ? [8, 8, 0, 0] : [2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <hr className="vendor-divider" />
      {/* Footer with button */}
      <div className="vendor-footer">
        <button>View full report</button>
      </div>
    </div>
  );
};

export default VendorBreakdown;
