import React from "react";
import { useState } from "react";
import InventoryTableColumns from "../InventoryTableColumns/InventoryTableColumns";
import InventoryTableRow from "../InventoryTableRow/InventoryTableRow";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const WarehouseInventoryList = () => {
  const [WarehouseInventoryList, setWarehouseInventoryList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${id}/inventories`)
      .then((res) => {
        setWarehouseInventoryList(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="inventory__list">
      <InventoryTableColumns />

      {WarehouseInventoryList.map((inventory) => (
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
