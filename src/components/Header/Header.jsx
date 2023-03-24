import React from "react";
import logo from "../../assets/logo/Logo-inStock.svg";
import "../Header/Header.scss";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="Header__container">
      <div className="Header__contents">
        <img src={logo} className="Header__logo" alt="" />
        <ul className="Header__list">
          <Link to="/">
            <li className="Header__items--active">Warehouses</li>
          </Link>
          <Link to="/Inventory">
            <li className="Header__items">Inventory</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default header;
