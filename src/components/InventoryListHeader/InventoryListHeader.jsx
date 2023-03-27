import "./InventoryListHeader.scss";
import { Link } from "react-router-dom";

const InventoryListHeader = () => {
  return (
    <div className="inventory__header">
      <h1>Inventory</h1>
      <div className="inventory__header--nav">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <Link to="/inventory/add">+ Add New Item</Link>
      </div>
    </div>
  );
};

export default InventoryListHeader;
