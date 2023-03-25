import ActionButton from "../ActionButton/ActionButton";
import CancelButton from "../CancelButton/CancelButton";
import GoBackButton from "../GoBackButton/GoBackButton";
import InputBox from "../InputBox/InputBox";
import "./EditInventory.scss";
import axios from "axios";
import { useState } from "react";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function EditInventory() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(itemName, description, category, status, warehouse, quantity);
    // axios
    //   .put(
    //     `${REACT_APP_SERVER_URL}/inventories/ae986f59-8c40-480c-bd28-ee6068cd3617`,
    //     {
    //       item_name: itemName,
    //       description: description,
    //       category: category,
    //       status: status,
    //       quantity: quantity,
    //       warehouse: warehouse,
    //     }
    //   )
    //   .then((result) => {
    //     event.target.reset();
    //   })
    //   .catch((error) => console.log("Error: ", error));
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
            htmlFor="itemName"
            inputId="itemName"
            inputName="Item Name"
            onChange={(e) => setItemName(e.target.value)}
          />

          <InputBox
            isTextarea={true}
            htmlFor="description"
            inputId="description"
            inputName="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <InputBox
            isTextarea={false}
            isDropMenu={true}
            htmlFor="category"
            inputId="category"
            inputName="Category"
            value1="Electronics"
            value2="Gear"
            value3="Apparel"
            value4="Accessories"
            value5="Health"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="edit-inventory__contact-ctr">
          <h2 className="edit-inventory__subheader">Item Availability</h2>

          <InputBox
            isTextarea={false}
            isRadio={true}
            htmlFor="status"
            inputId="status"
            inputName="Status"
            onChange={(e) => setStatus(e.target.value)}
          />

          <InputBox
            isTextarea={false}
            isRadio={false}
            htmlFor="quantity"
            inputId="quantity"
            inputName="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />

          <InputBox
            isTextarea={false}
            isDropMenu={true}
            htmlFor="Warehouse"
            inputId="Warehouse"
            inputName="Warehouse"
            value1="Manhattan"
            value2="Washington"
            value3="Jersey"
            value4="San Fran"
            value5="Santa Monica"
            value6="Seattle"
            value7="Miami"
            onChange={(e) => setWarehouse(e.target.value)}
          />
        </div>
      </div>
      <div className="edit-inventory__buttons-ctr">
        <CancelButton to="/" />
        <ActionButton isButton={true} name="Save" />
      </div>
    </form>
  );
}
