import ActionButton from "../../components/ActionButton/ActionButton";
import CancelButton from "../../components/CancelButton/CancelButton";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import InputBox from "../../components/InputBox/InputBox";
import "./EditInventory.scss";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function EditInventory() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [warehouseList, setWarehouseList] = useState([]);
  const [warehouse, setWarehouse] = useState("");

  const [errors, setErrors] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const inventoryResponse = await axios
          .get(`${REACT_APP_SERVER_URL}/api/inventories/${id}`)
          .then((res) => {
            console.log(res.data);
            return res.data;
          })
          .catch((error) => {
            throw error;
          });
        const warehouseResponse = await axios
          .get(`${REACT_APP_SERVER_URL}/api/warehouses`)
          .then((res) => {
            return res.data.map(({ id, warehouse_name }) => ({
              id,
              value: warehouse_name,
            }));
          })
          .catch((error) => {
            throw error;
          });

        setCategory(inventoryResponse?.category);
        setWarehouse(inventoryResponse?.warehouse_id);
        setItemName(inventoryResponse?.item_name);
        setDescription(inventoryResponse?.description);
        setQuantity(inventoryResponse?.quantity);
        setStatus(inventoryResponse?.status);
        setWarehouseList(warehouseResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const error = {};
    if (!itemName) {
      error.itemName = "Item Name is Required";
    }
    if (!description) {
      error.description = "Description is Required";
    }
    if (!category) {
      error.category = "Category is Required";
    }
    if (quantity <= 0 && status === "In Stock") {
      error.quantity = "Quantity is Required";
    }
    if (quantity < 0) {
      error.quantity = "Quantity cannot be Negative";
    }
    if (!warehouse) {
      error.warehouse = "Warehouse is Required";
    }
    setErrors(error);
    if (Object.entries(error).length === 0) {
      axios
        .put(`${REACT_APP_SERVER_URL}/api/inventories/${id}`, {
          item_name: itemName,
          description: description,
          category: category,
          status: status,
          quantity: status === "Out of Stock" ? 0 : quantity,
          warehouse_id: warehouse,
          id,
        })
        .catch((error) => console.log("Error: ", error));
    }
  };

  return (
    <form className="edit-inventory" onSubmit={handleSubmit}>
      <div className="edit-inventory__header-ctr">
        <GoBackButton path="/" />
        <h1 className="edit-inventory__header">Edit Inventory Item</h1>
      </div>
      <div className="edit-inventory__details-ctr">
        <div className="edit-inventory__location-ctr">
          <h2 className="edit-inventory__subheader">Item Details</h2>

          <InputBox
            isTextarea={false}
            isRadio={false}
            isDropMenu={false}
            isInputBox={true}
            htmlFor="itemName"
            inputId="itemName"
            inputName="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          {errors.itemName ? (
            <ErrorMessage
              isNotError={false}
              text={errors.itemName}
              className={"error--active"}
            />
          ) : (
            ""
          )}

          <InputBox
            isTextarea={true}
            htmlFor="description"
            inputId="description"
            inputName="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description ? (
            <ErrorMessage
              isNotError={false}
              text={errors.description}
              className={"error--active"}
            />
          ) : (
            ""
          )}

          <InputBox
            isTextarea={false}
            isDropMenu={true}
            htmlFor="category"
            inputId="category"
            inputName="Category"
            options={[
              { id: "Electronics", value: "Electronics" },
              { id: "Gear", value: "Gear" },
              { id: "Apparel", value: "Apparel" },
              { id: "Accessories", value: "Accessories" },
              { id: "Health", value: "Health" },
            ]}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category ? (
            <ErrorMessage
              isNotError={false}
              text={errors.category}
              className={"error--active"}
            />
          ) : (
            ""
          )}
        </div>

        <div className="edit-inventory__contact-ctr">
          <h2 className="edit-inventory__subheader">Item Availability</h2>

          {/* <InputBox
            isTextarea={false}
            isRadio={true}
            htmlFor="status"
            inputId="status"
            inputName="Status"
            defaultValue={inventory.status}
            onChange={(e) => setStatus(e.target.value)}
          /> */}

          <div className="radio">
            <div className="radio__title">
              <label htmlFor="status">Status</label>
            </div>

            <div>
              <input
                type="radio"
                id="inStock"
                name="status"
                value="In Stock"
                onChange={(e) => setStatus(e.target.value)}
                checked={status === "In Stock" ? true : false}
              />
              <label
                className="radio__label radio__label--stock"
                htmlFor="inStock"
              >
                In stock
              </label>
              <input
                type="radio"
                id="outOfStock"
                name="status"
                value="Out of Stock"
                onChange={(e) => setStatus(e.target.value)}
                checked={status === "Out of Stock" ? true : false}
              />
              <label className="radio__label" htmlFor="outOfStock">
                Out of stock
              </label>
            </div>
          </div>
          <InputBox
            classInputBox={status !== "Out of Stock" ? "" : "hideQuantity"}
            isTextarea={false}
            isRadio={false}
            isDropMenu={false}
            isInputBox={true}
            htmlFor="quantity"
            name="quantity"
            inputId="quantity"
            inputName="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {errors.quantity ? (
            <ErrorMessage
              isNotError={false}
              text={errors.quantity}
              className={"error--active"}
            />
          ) : (
            ""
          )}
          <InputBox
            isTextarea={false}
            isDropMenu={true}
            htmlFor="Warehouse"
            inputId="Warehouse"
            inputName="Warehouse"
            value={warehouse}
            options={warehouseList}
            onChange={(e) => setWarehouse(e.target.value)}
          />
          {errors.warehouse ? (
            <ErrorMessage
              isNotError={false}
              text={errors.warehouse}
              className={"error--active"}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="edit-inventory__buttons-ctr">
        <CancelButton to="/" />
        <ActionButton isButton={true} name="Save" />
      </div>
    </form>
  );
}
