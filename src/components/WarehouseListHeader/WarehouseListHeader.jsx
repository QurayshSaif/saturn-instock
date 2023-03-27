import "./WarehouseListHeader.scss";
import { Link } from "react-router-dom";

const WarehouseListHeader = () => {
  return (
    <div className="warehouse__header">
      <h1>Warehouses</h1>
      <div className="warehouse__header--nav">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <Link to="/warehouse/add">+ Add New Warehouse</Link>
      </div>
    </div>
  );
};

export default WarehouseListHeader;
