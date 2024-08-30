import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiHome, BiUser, BiBook, BiGridAlt, BiCog,BiEdit } from "react-icons/bi";
import "../styles/sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="menu">
      <div className="logo">
        <Link to="/dashboard" className="logo-link">
          <h2>SIES GST</h2>
        </Link>
      </div>
      <div className="menu--list">
        <Link
          to="/dashboard"
          className={`item ${location.pathname === "/dashboard" ? "active" : ""}`}
        >
          <BiHome className="icon" />
          Dashboard
        </Link>
        <Link
          to="/form-details"
          className={`item ${location.pathname === "/form-details" ? "active" : ""}`}
        >
          <BiEdit className="icon" />
          Fill your Form
        </Link>
        <Link
          to="/personal-details"
          className={`item ${location.pathname === "/personal-details" ? "active" : ""}`}
        >
          <BiUser className="icon" />
          Personal Details
        </Link>
        <Link
          to="/academic-details"
          className={`item ${location.pathname === "/academic-details" ? "active" : ""}`}
        >
          <BiBook className="icon" />
          Academic Details
        </Link>
        <Link
          to="/MiscDetails"
          className={`item ${location.pathname === "/MiscDetails" ? "active" : ""}`}
        >
          <BiGridAlt className="icon" />
          Miscellaneous Details
        </Link>
        <Link
          to="/settings"
          className={`item ${location.pathname === "/settings" ? "active" : ""}`}
        >
          <BiCog className="icon" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
