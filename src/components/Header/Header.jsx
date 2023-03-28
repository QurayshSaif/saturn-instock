import logo from "../../assets/logo/Logo-inStock.svg";
import "./Header.scss";
import {Link, useLocation} from "react-router-dom";

const Header = () => {

  const location = useLocation();
  const isWarehouseActive = location.pathname.startsWith("/warehouse") || location.pathname === "/";
  const isInventoryActive = location.pathname.startsWith("/inventory");

  return (
    <div className="header">
      <div className="header__contents">
        <Link to="/">
          <img src={logo} className="header__logo" alt="" />
        </Link>
        <div className="header__nav">
          {/* <li className={isWarehouseActive ? "header__active" : "header__inactive"}> */}
          {/* <Link className="Header__link" to="/warehouse">Warehouses</Link> */}
          <Link to="/warehouse" className={isWarehouseActive ? " header__active" : "header__inactive"}>Warehouses</Link>
          <Link to="/inventory" className={isInventoryActive ? " header__active" : "header__inactive"}>Inventory</Link>
          {/* </li> */}
          {/* <li className={isInventoryActive ? "header__active" : "header__inactive"}> */}
          {/* <Link to="/inventory">Inventory</Link> */}
          {/* <Link className="Header__link" to="/inventory">Inventory</Link> */}
          {/* </li> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
