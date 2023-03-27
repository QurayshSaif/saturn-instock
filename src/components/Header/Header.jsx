import React from "react";
import logo from "../../assets/logo/Logo-inStock.svg";
import "../Header/Header.scss";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="Header__container">
      <div className="Header__contents">
        <Link to="/">
          <img src={logo} className="Header__logo" alt="" />
        </Link>
        <ul className="Header__list">
          <Link className="Header__link" to="/warehouse">
            <li className="Header__items--active">Warehouses</li>
          </Link>
          <Link className="Header__link" to="/inventory">
            <li className="Header__items">Inventory</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default header;
