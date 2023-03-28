import "./InventoryItemDetails.scss";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import arrowSvg from "../../assets/icons/arrow_back-24px.svg";
import editWhiteSvg from "../../assets/icons/edit-white-24px.svg";
import { API_URL_BASE, INVENTORIES_PATH } from "../../utils/utils";
import axios from "axios";

const InventoryItemDetails = () => {
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState([]);
  const inventoryItemUrl = `${API_URL_BASE}/${INVENTORIES_PATH}`;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${id}`)
      .then((res) => {
        setInventoryItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, inventoryItemUrl]);

  return (
    <div className="item">
      <div className="item__page">
        <div className="item__header">
          <Link to="/inventory/" className="back__btn">
            <img src={arrowSvg} alt="back" className="back__img" />
          </Link>
          <h1>{inventoryItem.item_name}</h1>
          <Link to={`/inventory/${id}/edit`} className="edit__btn">
            <img src={editWhiteSvg} alt="edit" className="edit__img" />
            <span className="edit__span">Edit</span>
          </Link>
        </div>
        <div className="item__details">
          <div className="item__container">
            <div className="item__description">
              <h4>item description:</h4>
              <p className="p2--description">{inventoryItem.description}</p>
            </div>
            <div className="item__category">
              <h4>category:</h4>
              <p className="p2--category">{inventoryItem.category}</p>
            </div>
          </div>
          <div className="item__secondary-container">
            <div className="item__stat-quant-flex">
              <div className="item__status">
                <h4>status:</h4>
                <p
                  className={`${
                    inventoryItem.status === "Out of Stock"
                      ? "item__out"
                      : "item__in"
                  }`}
                >
                  {inventoryItem.status}
                </p>
              </div>
              <div className="item__quantity">
                <h4>quantity:</h4>
                <p className="p2">{inventoryItem.quantity}</p>
              </div>
            </div>
            <div className="item__warehouse">
              <h4>warehouse:</h4>
              <p className="p2">{inventoryItem.warehouse_id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetails;
