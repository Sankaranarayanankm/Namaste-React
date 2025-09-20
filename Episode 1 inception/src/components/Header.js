import { LOGO_URL } from "../utls/constant";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>

          <li>Cart</li>
          <button
            onClick={() => setBtnName(btnName == "Login" ? "Logout" : "Login")}
            className="login-btn"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
