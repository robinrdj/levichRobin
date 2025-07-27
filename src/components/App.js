import React from "react";
import VendorBreakdown from "./VendorBreakdown";
import VendorMonitor from "./VendorMonitor";
import VendorTableComponent from "./VendorTableComponent";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TopNavBar from "./TopNavBar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header className="header-container" />
      <div className="vendor-cards-container">
          <VendorBreakdown  className="vendor-breakdown-container"/>
          <VendorMonitor className="vendor-monitor-container"/>
      </div>
      <div className="vendor-table-container">
        <VendorTableComponent  />
      </div>
    </div>
  );
}

export default App;
