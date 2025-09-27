import { LOGO_URL } from "../utls/constant";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

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

          <li className="font-bold ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-gray-500 underline" : "hover:underline"
              }
              to="/cart"
            >
              Cart - {cartItems.length} items
            </NavLink>
          </li>
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
