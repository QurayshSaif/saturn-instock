import React from "react";
import logo from "../../assets/logo/Logo-inStock.svg";
import "../Header/Header.scss";

const header = () => {
  return (
    <div className="Header__container">
      <div className="Header__contents">
        <img src={logo} className="Header__logo" alt="" />
        <ul className="Header__list">
          <li className="Header__items--active">Warehouses</li>
          <li className="Header__items">Inventory</li>
        </ul>
      </div>
    </div>
  );
};

export default header;
