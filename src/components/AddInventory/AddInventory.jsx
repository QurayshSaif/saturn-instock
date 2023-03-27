import { useEffect, useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import CancelButton from "../CancelButton/CancelButton";
import GoBackButton from "../GoBackButton/GoBackButton";
import InputBox from "../InputBox/InputBox";
import "./AddInventory.scss";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function EditInventory() {

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/warehouses`)
    .then((results) => {
     setWarehouseData(results.data)
    })
    .catch((error) => console.log("Error: ",error));
  }, [])

  const [warehouseData, setWarehouseData] = useState(null);

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [instockStatus, setInstockStatus] = useState(true);
  const [outofstockStatus, setOutofstockStatus] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [warehouseName, setWarehouseName] = useState("");
  const [errorItemName, setErrorItemName] = useState({
    isActive: false,
    message: "",
  });
  const [errorDescription, setErrorDescription] = useState({
    isActive: false,
    message: "",
  });
  const [errorCategory, setErrorCategory] = useState({
    isActive: false,
    message: "",
  });
  const [errorQuantity, setErrorQuantity] = useState({
    isActive: false,
    message: "",
  });
  const [errorWarehouseName, setErrorWarehouseName] = useState({
    isActive: false,
    message: "",
  });

  const notEmpty = () => {
    if (itemName.length < 1) {
      setErrorItemName({isActive: true, message: "This field is required",
      });
    } else {
      setErrorItemName({ isActive: false, message: "" });
    }
    if (description.length < 1) {
      setErrorDescription({ isActive: true, message: "This field is required" });
    } else {
      setErrorDescription({ isActive: false, message: "" });
    }
    if (category.length < 1) {
      setErrorCategory({ isActive: true, message: "Choose a category" });
    } else {
      setErrorCategory({ isActive: false, message: "" });
    }
    if (quantity < 1 && instockStatus === true && outofstockStatus === false) {
      setErrorQuantity({ isActive: true, message: "Must be > 0 or choose Out of stock" });
    } else {
      setErrorQuantity({ isActive: false, message: "" });
    }
    if (warehouseName.length < 1) {
      setErrorWarehouseName({ isActive: true, message: "Choose a category" });
    } else {
      setErrorWarehouseName({ isActive: false, message: "" });
    }
  };

  const isQuantityValid = () => {
      if (quantity < 1 && instockStatus === true && outofstockStatus === false) {
        return false
      }
    return true
  }

  const isFormValid = () => {
    if (
      itemName.length < 1 &&
      description.length < 1 &&
      category.length < 1 &&
      warehouseName.length < 1
    ) {
      return false;
    }
    if (!isQuantityValid()) {
      return false
    }
    return true
  };

  const handleOnsubmit = (event) => {
    event.preventDefault();
    notEmpty();

    if(isFormValid()) {
      axios.post(`${REACT_APP_SERVER_URL}/api/inventories`, 
        {
          warehouse_id: warehouseName,
          item_name: itemName,
          description: description,
          category: category,
          status: `${instockStatus ? "In Stock" : "Out of Stock"}`,
          quantity: quantity
        })
          .then(() => {
            navigate("/inventory")
          })
          .catch((error) => console.log("Error: ",error));
    }
  }

  return (
    <form 
      className="add-inv"
      onSubmit={handleOnsubmit}  
    >
      <div className="add-inv__header-ctr">
        <GoBackButton path="/inventory" />
        <h1 className="add-inv__header">Add New Inventory Item</h1>
      </div>
      <div className="add-inv__details-ctr">
        <div className="add-inv__location-ctr">
          <h2 className="add-inv__subheader">Item Details</h2>
          <InputBox
            isTextarea={false}
            htmlFor="Name"
            inputId="Name"
            inputName="Item Name"
            onChange={(e) => setItemName(e.target.value)}
            className={
              errorItemName.isActive ? "add-inv__input--invalid" : "add-inv__input"
            }
          />
          {errorItemName.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorItemName.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={true}
            htmlFor="description"
            inputId="description"
            inputName="Please enter a brief item description..."
            onChange={(e) => setDescription(e.target.value)}
            className={
              errorDescription.isActive ? "add-inv__input--invalid" : "add-inv__input"
            }
          />
          {errorDescription.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorDescription.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={false}
            isDropMenu={true}
            htmlFor="category"
            inputId="category"
            inputName="Category"
            value1="Electronics"
            value2="Health"
            value3="Gear"
            value4="Apparel"
            value5="Accessories"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className={
              errorCategory.isActive ? "add-inv__input--invalid" : "add-inv__input"
            }
          />
          {errorCategory.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorCategory.message}
              className={"error--active"}
            />
          ) : null}
        </div>
        <div className="add-inv__contact-ctr">
          <h2 className="add-inv__subheader">Item Availability</h2>
          <InputBox
            isTextarea={false}
            isRadio={true}
            htmlFor="status"
            inputId="status"
            inputName="Status"
            instockStatus={instockStatus}
            setInstockStatus={setInstockStatus}
            outofstockStatus={outofstockStatus}
            setOutofstockStatus={setOutofstockStatus}
            setQuantity={setQuantity}
            setErrorQuantity={setErrorQuantity}
          />
          {instockStatus ? 
            (<InputBox
            isTextarea={false}
            type="number"
            inputName="Quantity"
            className={
              errorQuantity.isActive ? "add-inv__input--invalid add-inv__quantity" : "add-inv__input add-inv__quantity"
            }
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
            ) : null}
          {errorQuantity.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorQuantity.message}
              className={"error--active"}
            />
          ) : null}
          {warehouseData ? (
            <div 
              className="input"
            >
              <label htmlFor="warehouseName">Warehouse</label>
              <select 
                className={
                  errorWarehouseName.isActive ? "input__box input__dropdown add-inv__input--invalid" : "input__box input__dropdown add-inv__input"
                }
                name="warehouseName"
                onChange={(e) => setWarehouseName(e.target.value)}
                value={warehouseName}
              >
                <option value="" disabled>Please select</option>
                {warehouseData.map(data => {
                    return (
                      <option key={data.id} value={data.id}>{data.warehouse_name}</option>
                    )
                  })
                }
              </select>
            </div>
            ) : null}
            {errorWarehouseName.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorWarehouseName.message}
              className={"error--active"}
            />
          ) : null}

        </div>
      </div>
      <div className="add-inv__buttons-ctr">
        <CancelButton to="/inventory" />
        <ActionButton isButton={true} name="+ Add item" />
      </div>
    </form>
  );
}
