import "./InventoryTableColumns.scss";
import sortSvg from "../../assets/icons/sort-24px.svg";

const InventoryTableColumns = () => {
  return (
    <div className="inventory__columns">
      <h4>
        inventory Item
        <img src={sortSvg} alt="sort" />
      </h4>
      <h4>
        category
        <img src={sortSvg} alt="sort" />
      </h4>
      <h4>
        status
        <img src={sortSvg} alt="sort" />
      </h4>
      <h4>
        qty
        <img src={sortSvg} alt="sort" />
      </h4>
      <h4>
        warehouse
        <img src={sortSvg} alt="sort" />
      </h4>
    </div>
  );
};

export default InventoryTableColumns;
