import "./WarehouseList.scss";
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import WarehouseTableColumns from "../WarehouseTableColumns/WarehouseTableColumns";
import WarehouseTableRow from "../WarehouseTableRow/WarehouseTableRow";

const WarehouseList = () => {
  return (
    <div className="warehouse">
      <WarehouseListHeader />
      <WarehouseTableColumns />
      <WarehouseTableRow />
    </div>
  );
};

export default WarehouseList;
