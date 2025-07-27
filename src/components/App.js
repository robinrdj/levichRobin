// Import React and required components
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
      {/* Header section */}
      <Header className="header-container" />
      {/* Vendor cards section */}
      <div className="vendor-cards-container">
        <VendorBreakdown className="vendor-breakdown-container" />
        <VendorMonitor className="vendor-monitor-container" />
      </div>
      {/* Vendor table section */}
      <div className="vendor-table-container">
        <VendorTableComponent />
      </div>
    </div>
  );
}


export default App;
