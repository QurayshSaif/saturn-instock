import "./WarehouseTableRow.scss";
import chevronSvg from "../../assets/icons/chevron_right-24px.svg";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import editSvg from "../../assets/icons/edit-24px.svg";

const WarehouseTableRow = ({ warehouse_name, address, city, country, contact_name, contact_phone, contact_email }) => {
  return (
    <div className="mobile__container">
      <div className="warehouse__row">
        <div className="mobile__left">
          <div className="warehouse__block warehouse__name warehouse__mobile warehouse__left">
            <h4>warehouse</h4>
            <a href='/'>
              { warehouse_name }
              <img src={ chevronSvg } alt="link" />
            </a>
          </div>
          <div className="warehouse__block warehouse__address warehouse__left">
            <h4>address</h4>
            <p>{ address }</p>
            <p>{ city }, { country }</p>
          </div>
        </div>
        <div className="mobile__right">
          <div className="warehouse__block warehouse__contact-name">
            <h4>contact name</h4>
            <p>{ contact_name }</p>
          </div>
          <div className="warehouse__block warehouse__contact-info">
            <h4>contact info</h4>
            <p>{ contact_phone }</p>
            <p>{ contact_email }</p>
          </div>
        </div>
        <div className="warehouse__block warehouse__block--actions mobile__bottom">
          <a href="/"><img src={ deleteSvg } alt="delete" /></a>
          <a href="/"><img src={ editSvg } alt="edit" /></a>
        </div>
      </div>
    </div>
  );
};

export default WarehouseTableRow;
