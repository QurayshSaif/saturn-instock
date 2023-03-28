import "./WarehouseTableRow.scss";
import chevronSvg from "../../assets/icons/chevron_right-24px.svg";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import editSvg from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import DeleteModalInventory from "../DeleteModalInventory/DeleteModalInventory";
import { useEffect } from "react";
import axios from "axios";

const WarehouseTableRow = (props) => {

  console.log(props)
  return (
    <div className="warehouse__row mobile__container">
      <div className="mobile__left">
        <div className="warehouse__block warehouse__name warehouse__mobile warehouse__left">
          <h4>warehouse</h4>
          <Link to={`/warehouse/${props.id}`}>
            {props.warehouseName}
            <img src={chevronSvg} alt="link" />
          </Link>
        </div>
        <div className="warehouse__block warehouse__address warehouse__left">
          <h4>address</h4>
          <p>
            {props.address}, {props.city}, {props.country}
          </p>
        </div>
      </div>
      <div className="mobile__right">
        <div className="warehouse__block warehouse__contact-name">
          <h4>contact name</h4>
          <p>{props.name}</p>
        </div>
        <div className="warehouse__block warehouse__contact-info">
          <h4>contact information</h4>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
      <div className="warehouse__block warehouse__block--actions mobile__bottom">
        <DeleteModalInventory
          item_name={props.warehouseName}
          title="warehouse"
          subtitle="from the list of warehouses"
          fetchWarehouseList={props.fetchWarehouseList}
          id={props.id}
          to={`/warehouse/${props.id}/delete`}
        />

        <Link to={`/warehouse/${props.id}/edit`}>
          <img src={editSvg} alt="edit" />
        </Link>
      </div>
    </div>
  );
};

export default WarehouseTableRow;
