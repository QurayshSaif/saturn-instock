import { useEffect, useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import CancelButton from "../CancelButton/CancelButton";
import GoBackButton from "../GoBackButton/GoBackButton";
import InputBox from "../InputBox/InputBox";
import "./AddInventory.scss";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function EditInventory() {

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/warehouses`)
    .then((results) => {
     setWarehouseData(results.data)
    })
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
  // const [errorContact, setErrorContact] = useState({
  //   isActive: false,
  //   message: "default",
  // });
  // const [errorPhone, setErrorPhone] = useState({
  //   isActive: false,
  //   message: "default",
  // });
  // const [errorPosition, setErrorPosition] = useState({
  //   isActive: false,
  //   message: "default",
  // });
  // const [errorEmail, setErrorEmail] = useState({
  //   isActive: false,
  //   message: "default",
  // });

 

  const notEmpty = () => {
    if (itemName.length < 1) {
      setErrorItemName({
        isActive: true,
        message: "This field is required",
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
    if (quantity.length < 1 && instockStatus === true && outofstockStatus === false) {
      setErrorQuantity({ isActive: true, message: "The quantity must be greater than 0 or choose Out of stock" });
    } else {
      setErrorQuantity({ isActive: false, message: "" });
    }
    // if (contactName.length < 1) {
    //   setErrorContact({ isActive: true, message: "This field is required" });
    // } else {
    //   setErrorContact({ isActive: false, message: "" });
    // }
    // if (position.length < 1) {
    //   setErrorPosition({ isActive: true, message: "This field is required" });
    // } else {
    //   setErrorPosition({ isActive: false, message: "" });
    // }
    // if (phoneNumber.length < 1) {
    //   setErrorPhone({ isActive: true, message: "This field is required" });
    // } else {
    //   setErrorPhone({ isActive: false, message: "" });
    // }
    // if (email.length < 1) {
    //   setErrorEmail({ isActive: true, message: "This field is required" });
    // } else {
    //   setErrorEmail({ isActive: false, message: "" });
    // }
  };

  const isFormValid = () => {
    // if (
    //   email.length < 1 &&
    //   phoneNumber.length < 1 &&
    //   position.length < 1 &&
    //   contactName.length < 1 &&
    //   country.length < 1 &&
    //   city.length < 1 &&
    //   address.length < 1 &&
    //   Name.length < 1
    // ) {
    //   return false;
    // }
    // if (!isPhoneValid()) {
    //   return false;
    // }
    // if (!isEmailValid()) {
    //   return false;
    // }
    // return true;
  };

  const handleOnsubmit = (event) => {
    event.preventDefault();
    notEmpty();
  }

  return (
    <form 
      className="add-inv"
      onSubmit={handleOnsubmit}  
    >
      <div className="add-inv__header-ctr">
        <GoBackButton path="/" />
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
          {/* {errorContact.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorContact.message}
              className={"error--active"}
            />
          ) : null} */}
          {instockStatus ? 
            (<InputBox
            isTextarea={false}
            type="number"
            inputName="Quantity"
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
          {/* <InputBox
            isTextarea={false}
            isDropMenu={true}
            htmlFor=""
            inputId=""
            inputName="Warehouse"
            value1="Manhattan"
            className={
              errorCity.isActive ? "add-inv__input--invalid" : "add-inv__input"
            }
          /> */}
          {warehouseData ? (
            <div className="input">
              <label htmlFor="warehouseName">Warehouse</label>
              <select 
                className={`input__box input__dropdown`}
                name="warehouseName"
                onChange={(e) => setWarehouseName(e.target.value)}
                value={warehouseName}
              >
                <option value="" disabled selected>Please select</option>
                {warehouseData.map(data => {
                    return (
                      <option key={data.id}>{data.warehouse_name}</option>
                    )
                  })
                }
              </select>
            </div>
            ) : null
            }
        </div>
      </div>
      <div className="add-inv__buttons-ctr">
        <CancelButton to="/" />
        <ActionButton isButton={true} name="+ Add item" />
      </div>
    </form>
  );
}
