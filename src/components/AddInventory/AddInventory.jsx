import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import CancelButton from "../CancelButton/CancelButton";
import GoBackButton from "../GoBackButton/GoBackButton";
import InputBox from "../InputBox/InputBox";
import "./AddInventory.scss";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function EditInventory() {
  const [Name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState({
    isActive: false,
    message: "default",
  });
  const [errorAddress, setErrorAddress] = useState({
    isActive: false,
    message: "default",
  });
  const [errorCity, setErrorCity] = useState({
    isActive: false,
    message: "default",
  });
  const [errorCountry, setErrorCountry] = useState({
    isActive: false,
    message: "default",
  });
  const [errorContact, setErrorContact] = useState({
    isActive: false,
    message: "default",
  });
  const [errorPhone, setErrorPhone] = useState({
    isActive: false,
    message: "default",
  });
  const [errorPosition, setErrorPosition] = useState({
    isActive: false,
    message: "default",
  });
  const [errorEmail, setErrorEmail] = useState({
    isActive: false,
    message: "default",
  });
  const notEmpty = () => {
    if (Name.length < 1) {
      setErrorName({
        isActive: true,
        message: "This field is required",
      });
    } else {
      setErrorName({ isActive: false, message: "" });
    }
    if (address.length < 1) {
      setErrorAddress({ isActive: true, message: "This field is required" });
    } else {
      setErrorAddress({ isActive: false, message: "" });
    }
    if (city.length < 1) {
      setErrorCity({ isActive: true, message: "This field is required" });
    } else {
      setErrorCity({ isActive: false, message: "" });
    }
    if (country.length < 1) {
      setErrorCountry({ isActive: true, message: "This field is required" });
    } else {
      setErrorCountry({ isActive: false, message: "" });
    }
    if (contactName.length < 1) {
      setErrorContact({ isActive: true, message: "This field is required" });
    } else {
      setErrorContact({ isActive: false, message: "" });
    }
    if (position.length < 1) {
      setErrorPosition({ isActive: true, message: "This field is required" });
    } else {
      setErrorPosition({ isActive: false, message: "" });
    }
    if (phoneNumber.length < 1) {
      setErrorPhone({ isActive: true, message: "This field is required" });
    } else {
      setErrorPhone({ isActive: false, message: "" });
    }
    if (email.length < 1) {
      setErrorEmail({ isActive: true, message: "This field is required" });
    } else {
      setErrorEmail({ isActive: false, message: "" });
    }
  };
  const isEmailValid = () => {
    if (email.includes("@")) {
      return true;
    }
    setErrorEmail({
      isActive: true,
      message: "Enter a valid email. Hint: must include @",
    });
    return false;
  };
  const isPhoneValid = () => {
    const phoneFormat = /^(\+\d{1,2}\s)?\(\d{3}\)\s\d{3}-\d{4}$/;
    if (phoneFormat.test(phoneNumber)) {
      return true;
    }
    setErrorPhone({
      isActive: true,
      message: "Must have the format +1 (xxx) xxx-xxxx",
    });
    return false;
  };
  const isFormValid = () => {
    if (
      email.length < 1 &&
      phoneNumber.length < 1 &&
      position.length < 1 &&
      contactName.length < 1 &&
      country.length < 1 &&
      city.length < 1 &&
      address.length < 1 &&
      Name.length < 1
    ) {
      return false;
    }
    if (!isPhoneValid()) {
      return false;
    }
    if (!isEmailValid()) {
      return false;
    }
    return true;
  };
  return (
    <form className="add-wh">
      <div className="add-wh__header-ctr">
        <GoBackButton path="/" />
        <h1 className="add-wh__header">Add New Inventory Item</h1>
      </div>
      <div className="add-wh__details-ctr">
        <div className="add-wh__location-ctr">
          <h2 className="add-wh__subheader">Item Details</h2>
          <InputBox
            isTextarea={false}
            htmlFor="Name"
            inputId="Name"
            inputName="Item Name"
            onChange={(e) => setName(e.target.value)}
            className={
              errorName.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
          {errorName.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorName.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={true}
            htmlFor="description"
            inputId="description"
            inputName="Description"
            className={
              errorName.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
          <InputBox
            isTextarea={false}
            isDropMenu={true}
            htmlFor="category"
            inputId="category"
            inputName="Category"
            value1="Electronics"
            className={
              errorCity.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
        </div>
        <div className="add-wh__contact-ctr">
          <h2 className="add-wh__subheader">Item Availability</h2>
          <InputBox
            isTextarea={false}
            isRadio={true}
            htmlFor="status"
            inputId="status"
            inputName="Status"
            // onChange={(e) => setContactName(e.target.value)}
          />
          {errorContact.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorContact.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={false}
            isDropMenu={true}
            htmlFor=""
            inputId=""
            inputName=""
            value1="Manhattan"
            className={
              errorCity.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
        </div>
      </div>
      <div className="add-wh__buttons-ctr">
        <CancelButton to="/" />
        <ActionButton isButton={true} name="+ Add item" />
      </div>
    </form>
  );
}
