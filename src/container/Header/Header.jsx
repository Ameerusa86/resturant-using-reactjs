import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div>
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="chase the new flavor" />
        <h1 className="app__header-h1">The Key to fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  </div>
);

export default Header;
