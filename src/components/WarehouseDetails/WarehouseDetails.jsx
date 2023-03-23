import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/icons/edit-24px-white.svg";
import "./WarehouseDetails.scss";

export default function WarehouseDetails() {
  return (
    <div className="warehouse">
      <section className="warehouse-header">
        <div className="warehouse-header__title-container">
          <img
            className="warehouse-header__arrow"
            src={backArrow}
            alt="back arrow"
          />
          <h1 className="warehouse-header__title">Washington</h1>
        </div>
        <div className="warehouse-header__edit">
          <img
            className="warehouse-header__edit-icon"
            src={editIconWhite}
            alt="Edit"
          />
        </div>
      </section>

      <section className="warehouse-details">
        <div className="warehouse-details__address">
          <h4 className="warehouse-details__title">WAREHOUSE ADDRESS</h4>
          <div className="warehouse-details__address-tab">
            <p>33 Pearl Street SW, Washington, USA</p>
          </div>
        </div>

        <div className="warehouse-details__contact">
          <div>
            <h4 className="warehouse-details__title">CONTACT NAME:</h4>
            <p>Graeme Lyon</p>
            <p>Warehouse Manager</p>
          </div>

          <div>
            <h4 className="warehouse-details__title">CONTACT INFORMATION:</h4>
            <p>+1(647)504-0911</p>
            <p>glyon@instock.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
