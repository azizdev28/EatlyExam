import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/img/LogoEatly.svg";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Navbar container">
        <div className="NavbarLeft">
          <div className="Logo">
            <NavLink to="/home">
              <img src={Logo} alt="LogoEatly" />
            </NavLink>
            <h2>eatly</h2>
          </div>
          <ul className="ListItem">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dishes">Dishes</NavLink>
            </li>
          </ul>
        </div>

        <div className="NavbarRight">
          <NavLink to="/dishesShop">
            <FaShoppingCart />
          </NavLink>
          <NavLink to="/login" className="Login">
            Login
          </NavLink>
          <NavLink to="/register" className="SignUp">
            Sign Up
          </NavLink>
        </div>
        <div className="BurgerBtn">
          <button>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
