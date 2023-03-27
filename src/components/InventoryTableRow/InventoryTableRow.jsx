import "./InventoryTableRow.scss";
import chevronSvg from "../../assets/icons/chevron_right-24px.svg";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import editSvg from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

const InventoryTableRow = (props) => {
  return (
    <div className="inventory__row">
      <div className="inventory__item">
        <p>
          {props.inventoryItem}
          <img src={chevronSvg} alt="link" />
        </p>
      </div>
      <div className="inventory__category">
        <p>{props.category}</p>
      </div>
      <div className="inventory__status">{props.status}</div>
      <div className="inventory__qty">
        <p>{props.quantity}</p>
      </div>
      <div className="inventory__warehouse">
        <p>{props.warehouse}</p>
      </div>
      <div className="inventory__actions">
        <img src={deleteSvg} alt="delete" />
        <Link to={`/inventory/${props.id}/edit`}>
          <img src={editSvg} alt="edit" />
        </Link>
      </div>
    </div>
  );
};

export default InventoryTableRow;
