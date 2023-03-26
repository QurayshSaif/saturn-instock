import "./InventoryList.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryTableColumns from "../InventoryTableColumns/InventoryTableColumns";
import InventoryTableRow from "../InventoryTableRow/InventoryTableRow";
import { API_URL_BASE, INVENTORIES_PATH } from "../../utils/utils";
import axios from "axios";

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const inventoryUrl = `${API_URL_BASE}/${INVENTORIES_PATH}`;

  useEffect(() => {
    document.title = "InStock - Warehouse Overview";
    axios
      .get(inventoryUrl)
      .then((res) => {
        setInventoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="inventory__list">
      <InventoryListHeader />
      <InventoryTableColumns />

      {inventoryList.map((inventory) => (
        <InventoryTableRow
          key={inventory.id}
          id={inventory.id}
          inventoryItem={inventory.inventory_item}
          category={inventory.category}
          status={inventory.status}
          quantity={inventory.quantity}
          warehouse={inventory.warehouse}
        />
      ))}
    </div>
  );
};

export default InventoryList;
