import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/icons/edit-24px-white.svg";
import "./WarehouseHeader.scss";
import { Link } from "react-router-dom";

export default function WarehouseHeader({ warehouseName, id }) {
  return (
    <section className="warehouse-header">
      <div className="warehouse-header__title-container">
        <Link to="/warehouse" className="warehouse-header__link">
          <img
            className="warehouse-header__arrow"
            src={backArrow}
            alt="back arrow"
          />
        </Link>
        <h1 className="warehouse-header__title">{warehouseName}</h1>
      </div>
      <Link to={`/warehouse/${id}/edit`}>
        <div className="warehouse-header__edit">
          <img
            className="warehouse-header__edit-icon"
            src={editIconWhite}
            alt="Edit"
          />
          <span className="warehouse-header__edit-tab">Edit</span>
        </div>
      </Link>
    </section>
  );
}
