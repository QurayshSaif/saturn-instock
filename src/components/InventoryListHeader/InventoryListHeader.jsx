import "./InventoryListHeader.scss";

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
        <a href="/">+ Add New Item</a>
      </div>
    </div>
  );
};

export default InventoryListHeader;
