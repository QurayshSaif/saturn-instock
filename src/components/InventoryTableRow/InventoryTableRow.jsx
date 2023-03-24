import "./InventoryTableRow.scss";
import chevronSvg from "../../assets/icons/chevron_right-24px.svg";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import editSvg from "../../assets/icons/edit-24px.svg";

const InventoryTableRow = () => {
  return (
    <div className="inventory__row">
      <div className="inventory__set">
        <section className="inventory__container">
          <article className="inventory__holder">
            <h4 className="inventory__title">inventory item</h4>
            <div className="inventory__item">
              <p>item_placeholder</p>
              <img src={chevronSvg} alt="link" />
            </div>
          </article>

          <article className="inventory__holder">
            <h4 className="inventory__title">category</h4>
            <div className="inventory__category">
              <p>category_placeholder</p>
            </div>
          </article>
        </section>

        <section className="inventory__container">
          <article className="inventory__holder">
            <h4 className="inventory__title">status</h4>
            <div className="inventory__status"></div>
          </article>

          <article className="inventory__holder">
            <h4 className="inventory__title">qty</h4>
            <div className="inventory__qty">
              <p>qty_placeholder</p>
            </div>
          </article>

          <article className="inventory__holder">
            <h4 className="inventory__title">warehouse</h4>
            <div className="inventory__warehouse">
              <p>location_placeholder</p>
            </div>
          </article>
        </section>
      </div>

      <div className="inventory__actions">
        <img src={deleteSvg} alt="delete" />
        <img src={editSvg} alt="edit" />
      </div>
    </div>
  );
};

export default InventoryTableRow;
