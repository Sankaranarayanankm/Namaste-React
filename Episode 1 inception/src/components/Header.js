import { LOGO_URL } from "../utls/constant";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between align-middle shadow-gray-400 shadow-sm">
      <div>
        <img className="w-24" src={LOGO_URL} alt="App Logo" />
      </div>
      <div>
        <ul className="flex gap-3 p-8 ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text underline text-gray-500" : "hover:underline"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text underline  text-gray-500" : "hover:underline"
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text underline  text-gray-500" : "hover:underline"
              }
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
