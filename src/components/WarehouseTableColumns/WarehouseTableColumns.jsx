import "./WarehouseTableColumns.scss";
import sortSvg from "../../assets/icons/sort-24px.svg";

const WarehouseTableColumns = () => {
  return (
    <div className="warehouse__columns">
      <h4>
        warehouse
        <img src={sortSvg} alt="sort" />
      </h4>
      <h4>
        address
        <img src={sortSvg} alt="sort" />
      </h4>
      <h4>
        contact name
        <img src={sortSvg} alt="sort" />
      </h4>
      <h4>
        contact information
        <img src={sortSvg} alt="sort" />
      </h4>
      <h4>
        actions
      </h4>
    </div>
  );
};

export default WarehouseTableColumns;
