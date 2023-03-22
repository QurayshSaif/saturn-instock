import "./WarehouseTableRow.scss";
import chevronSvg from "../../Assets/icons/chevron_right-24px.svg";
import deleteSvg from "../../Assets/icons/delete_outline-24px.svg";
import editSvg from "../../Assets/icons/edit-24px.svg";

const WarehouseTableRow = () => {
  return (
    <div className="warehouse__row">
      <div className="warehouse__name">
        <h4>warehouse</h4>
        <p>
          Manhattan
          <img src={chevronSvg} alt="link" />
        </p>
      </div>
      <div className="warehouse__address">
        <h4>address</h4>
        <p>503 Broadway</p>
        <p>New York, USA</p>
      </div>
      <div className="warehouse__contact-name">
        <h4>contact name</h4>
        <p>Parmin Aujla</p>
      </div>
      <div className="warehouse__contact-info">
        <h4>contact info</h4>
        <p>+1 (629) 555-0129</p>
        <p>paujla@instock.com</p>
      </div>
      <div className="warehouse__actions">
        <img src={deleteSvg} alt="delete" />
        <img src={editSvg} alt="edit" />
      </div>
    </div>
  );
};

export default WarehouseTableRow;
