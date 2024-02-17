import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/img/LogoEatly.svg";
import "../Header/Header.scss";

const Header = () => {
  return (
    <div className="Header ">
      <div className="Navbar container">
        <div className="NavbarLeft">
          <div className="Logo">
            <a href="#">
              <img src={Logo} alt="LogoEatly" />
            </a>
            <h2>eatly</h2>
          </div>
          <ul className="ListItem">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dishes</a>
            </li>
          </ul>
        </div>

        <div className="NavbarRight">
          <a href="#">
            <FaShoppingCart />
          </a>
          <a href="#" className="Login">
            Login
          </a>
          <a href="#" className="SignUp">
            Sign Up
          </a>
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
