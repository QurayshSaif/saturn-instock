import "./InventoryList.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryTableColumns from "../InventoryTableColumns/InventoryTableColumns";
import InventoryTableRow from "../InventoryTableRow/InventoryTableRow";
import { API_URL_BASE, INVENTORIES_PATH } from "../../utils/utils";
import axios from "axios";

const InventoryList = () => {
  return (
    <div className="inventory__list">
      <InventoryListHeader />
      <InventoryTableColumns />
      <InventoryTableRow />
      <InventoryTableRow />
      <InventoryTableRow />
      <InventoryTableRow />
      <InventoryTableRow />
      <InventoryTableRow />
      <InventoryTableRow />
      <InventoryTableRow />
    </div>
  );
};

export default InventoryList;
