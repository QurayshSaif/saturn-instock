import React from "react";
import InventoryTableColumns from "../InventoryTableColumns/InventoryTableColumns";
import InventoryTableRow from "../InventoryTableRow/InventoryTableRow";

const WarehouseInventoryList = () => {
  return (
    <div className="inventory__list">
      <InventoryTableColumns />

      {inventoryList.map((inventory) => (
        <InventoryTableRow
          key={inventory.id}
          id={inventory.id}
          inventoryItem={inventory.item_name}
          category={inventory.category}
          status={inventory.status}
          quantity={inventory.quantity}
          warehouse={inventory.warehouse_name}
        />
      ))}
    </div>
  );
};

export default WarehouseInventoryList;
