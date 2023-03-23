import "./InventoryTableRow.scss";
import chevronSvg from "../../assets/icons/chevron_right-24px.svg";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import editSvg from "../../assets/icons/edit-24px.svg";

const InventoryTableRow = () => {
  return (
    <div className="inventory__row">
      <div className="inventory__tem">
        <p>
          item_placeholder
          <img src={chevronSvg} alt="link" />
        </p>
      </div>
      <div className="inventory__category">
        <p>category_placeholder</p>
      </div>
      <div className="inventory__status"></div>
      <div className="inventory__qty">
        <p>qty_placeholder</p>
      </div>
      <div className="inventory__warehouse">
        <p>location_placeholder</p>
      </div>
      <div className="inventory__actions">
        <img src={deleteSvg} alt="delete" />
        <img src={editSvg} alt="edit" />
      </div>
    </div>
  );
};

export default InventoryTableRow;
