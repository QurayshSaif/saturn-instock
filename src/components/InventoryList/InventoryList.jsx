import "./InventoryList.scss";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryTableColumns from "../InventoryTableColumns/InventoryTableColumns";
import InventoryTableRow from "../InventoryTableRow/InventoryTableRow";

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
