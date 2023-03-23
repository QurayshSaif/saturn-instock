import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/icons/edit-24px-white.svg";
import "./WarehouseHeader.scss";

export default function WarehouseHeader({ warehouseName }) {
  return (
    <section className="warehouse-header">
      <div className="warehouse-header__title-container">
        <img
          className="warehouse-header__arrow"
          src={backArrow}
          alt="back arrow"
        />
        <h1 className="warehouse-header__title">{warehouseName}</h1>
      </div>
      <div className="warehouse-header__edit">
        <img
          className="warehouse-header__edit-icon"
          src={editIconWhite}
          alt="Edit"
        />
        <span className="warehouse-header__edit-tab">Edit</span>
      </div>
    </section>
  );
}
