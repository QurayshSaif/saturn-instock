import "./InventoryList.scss";
import { useEffect, useState } from "react";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryTableColumns from "../InventoryTableColumns/InventoryTableColumns";
import InventoryTableRow from "../InventoryTableRow/InventoryTableRow";
import axios from "axios";
import { useParams } from "react-router-dom";

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const { id } = useParams();

  const fetchInventoryList = () => {
    axios
      .get(`http://localhost:8080/api/inventories`)
      .then((res) => {
        setInventoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    document.title = "InStock - Inventory list";
    fetchInventoryList();
  }, []);

  return (
    <div className="inventory__list">
      <InventoryListHeader />
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
          fetchInventoryList={fetchInventoryList}
        />
      ))}
    </div>
  );
};

export default InventoryList;
