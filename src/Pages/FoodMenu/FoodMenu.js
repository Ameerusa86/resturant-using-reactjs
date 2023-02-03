import React from "react";
import { Navbar } from "../../components";
import Card from "../../components/Card/Card";
import "./FoodMenu.css";

const FoodMenu = () => {
  return (
    <>
      <Navbar />
      <div className="app__bg" style={{ width: "100%", height: "100vh" }}>
        <h3 className="flex__center headtext__cormorant">food menu</h3>
        <Card />
      </div>
    </>
  );
};

export default FoodMenu;
