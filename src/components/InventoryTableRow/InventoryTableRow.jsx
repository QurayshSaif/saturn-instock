import "./InventoryTableRow.scss";
import chevronSvg from "../../assets/icons/chevron_right-24px.svg";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import editSvg from "../../assets/icons/edit-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import DeleteModalInventory from "../DeleteModalInventory/DeleteModalInventory";
import axios from "axios";

const InventoryTableRow = (props) => {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const handleClick = () => {
    axios
    .delete(`${REACT_APP_SERVER_URL}/api/inventories/${props.id}`)
      .then(() => {
        // navigate("/inventory");
        console.log(props.path)
        navigate(props.path);
        props.fetchInventoryList();
        props.fetchWarehouseInventoryList(props.warehouseId);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className="inventory__row">
      <Link to={`/inventory/${props.id}`}>
        <div className="inventory__item">
          <p>
            {props.inventoryItem}
            <img src={chevronSvg} alt="link" />
          </p>
        </div>
      </Link>
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
        {/* <img src={deleteSvg} alt="delete" /> */}
        <DeleteModalInventory
            item_name={props.inventoryItem}
            title="inventory"
            subtitle="from the inventory list"
            id={props.id}
            onClick={handleClick}
            // to={`/warehouse/${props.id}/delete`}
        />
        <Link to={`/inventory/${props.id}/edit`}>
          <img src={editSvg} alt="edit" />
        </Link>
      </div>
    </div>
  );
};

export default InventoryTableRow;
