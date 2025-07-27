import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Sidebar from "./components/Sidebar";
import reportWebVitals from "./reportWebVitals";
import TopNavBar from "./components/TopNavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <div className="topbar-container">
        <TopNavBar />
      </div>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div>
        <App />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
