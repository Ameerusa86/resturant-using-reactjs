import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="/">Home</a>
          </li>
          <li className="p__opensans">
            <a href="/">About</a>
          </li>
          <li className="p__opensans">
            <a href="/">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="/">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            Log In / Register
          </a>
          <div />
          <a href="/" className="p__opensans">
            Reserve your Table
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans">
                  <a href="/">Home</a>
                </li>
                <li className="p__opensans">
                  <a href="/">About</a>
                </li>
                <li className="p__opensans">
                  <a href="/">Menu</a>
                </li>
                <li className="p__opensans">
                  <a href="/">Awards</a>
                </li>
                <li className="p__opensans">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
