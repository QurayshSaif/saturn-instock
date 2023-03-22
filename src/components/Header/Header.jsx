import React from "react";
import logo from "../../Assets/Logo/Logo-inStock.svg";
import "../Header/Header.scss";

const header = () => {
  return (
    <div className="Header__container">
      <img src={logo} className="Header__logo" alt="" />
      <ul className="Header__list">
        <li className="Header__items">Warehouse</li>
        <li className="Header__items">Inventory</li>
      </ul>
    </div>
  );
};

export default header;
