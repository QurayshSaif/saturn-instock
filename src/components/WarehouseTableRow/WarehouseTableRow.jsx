import "./WarehouseTableRow.scss";
import chevronSvg from "../../assets/icons/chevron_right-24px.svg";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import editSvg from "../../assets/icons/edit-24px.svg";
import {Link} from "react-router-dom";

const WarehouseTableRow = (props) => {
  return (
    <div className="mobile__container">
      <div className="warehouse__row">
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
            <p>{props.address}, {props.city}, {props.country}</p>
          </div>
        </div>
        <div className="mobile__right">
          <div className="warehouse__block warehouse__contact-name">
            <h4>contact name</h4>
            <p>{props.name}</p>
          </div>
          <div className="warehouse__block warehouse__contact-info">
            <h4>contact info</h4>
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
        <div className="warehouse__block warehouse__block--actions mobile__bottom">
          <Link to={`/warehouse/${props.id}/delete`}><img src={deleteSvg} alt="delete" /></Link>
          <Link to={`/warehouse/${props.id}/edit`}><img src={editSvg} alt="edit" /></Link>
        </div>
      </div>
    </div>
  );
};

export default WarehouseTableRow;
