import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw  } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <ul className="nav-menu active">
          <li>
            <Link className="nva" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nva2"
              to="/Product"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Animals
            </Link>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="#PROMOTION" className="menudrop">
                    Dogs
                  </Link>
                </li>
                <li>
                  <Link to="#Tvs" className="menudrop">
                    Cats
                  </Link>
                </li>
                <li>
                  <Link to="#pcs" className="menudrop">
                    Pigs
                  </Link>
                </li>
                <li>
                  <Link to="#lap" className="menudrop">
                    Monkeys
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className="nva" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="checkout">
          <div>
            <Link className="nva" to="/cart">
            <FontAwesomeIcon icon={faPaw } className="custom-icon"/>
              
            </Link>
          </div>
        </div>
      <div className="but1">
            <button className="button1">
              <Link className="but" to="/Sign">
                Sign Up
              </Link>
            </button>
          </div>
      </div>
    </div>
  );
}
export default Navbar;
