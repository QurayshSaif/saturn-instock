import "./InventoryTableColumns.scss";
import sortSvg from "../../assets/icons/sort-24px.svg";

const InventoryTableColumns = () => {
  return (
    <div className="inventory__columns">
      <h4>
        inventory Item
        <img className="inventory__sort" src={sortSvg} alt="sort" />
      </h4>
      <h4>
        category
        <img className="inventory__sort" src={sortSvg} alt="sort" />
      </h4>
      <h4>
        status
        <img className="inventory__sort" src={sortSvg} alt="sort" />
      </h4>
      <h4>
        qty
        <img className="inventory__sort" src={sortSvg} alt="sort" />
      </h4>
      <h4>
        warehouse
        <img className="inventory__sort" src={sortSvg} alt="sort" />
      </h4>
      <h4>actions</h4>
    </div>
  );
};

export default InventoryTableColumns;
