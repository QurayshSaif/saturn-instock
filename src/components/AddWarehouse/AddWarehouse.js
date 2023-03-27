import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import CancelButton from "../CancelButton/CancelButton";
import GoBackButton from "../GoBackButton/GoBackButton";
import InputBox from "../InputBox/InputBox";
import "./AddWarehouse.scss";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";

const AddWarehouse = () => {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [errorWarehouseName, setErrorWarehouseName] = useState({
    isActive: false,
    message: "",
  });
  const [errorAddress, setErrorAddress] = useState({
    isActive: false,
    message: "",
  });
  const [errorCity, setErrorCity] = useState({ isActive: false, message: "" });
  const [errorCountry, setErrorCountry] = useState({
    isActive: false,
    message: "",
  });
  const [errorContact, setErrorContact] = useState({
    isActive: false,
    message: "",
  });
  const [errorPhone, setErrorPhone] = useState({
    isActive: false,
    message: "",
  });
  const [errorPosition, setErrorPosition] = useState({
    isActive: false,
    message: "",
  });
  const [errorEmail, setErrorEmail] = useState({
    isActive: false,
    message: "",
  });

  const notEmpty = () => {
    if (warehouseName.length < 1) {
      setErrorWarehouseName({
        isActive: true,
        message: "This field is required",
      });
    } else {
      setErrorWarehouseName({ isActive: false, message: "" });
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
      email.length < 1 ||
      phoneNumber.length < 1 ||
      position.length < 1 ||
      contactName.length < 1 ||
      country.length < 1 ||
      city.length < 1 ||
      address.length < 1 ||
      warehouseName.length < 1
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

  const handleSubmit = (event) => {
    event.preventDefault();
    notEmpty();

    if (isFormValid()) {
      axios
        .post(`${REACT_APP_SERVER_URL}/api/warehouses`, {
          warehouse_name: warehouseName,
          address: address,
          city: city,
          country: country,
          contact_name: contactName,
          contact_position: position,
          contact_phone: phoneNumber,
          contact_email: email,
        })
        .then((result) => {
          event.target.reset();
          navigate("/warehouse");
        })
        .catch((error) => console.log("Error: ", error));
    }
  };

  return (
    <form className="add-wh" onSubmit={handleSubmit}>
      <div className="add-wh__header-ctr">
        <GoBackButton path="/warehouse" />
        <h1 className="add-wh__header">Add New Warehouse</h1>
      </div>
      <div className="add-wh__details-ctr">
        <div className="add-wh__location-ctr">
          <h2 className="add-wh__subheader">Warehouse Details</h2>
          <InputBox
            isTextarea={false}
            html="warehouseName"
            inputId="warehouseName"
            inputName="Warehouse Name"
            onChange={(e) => setWarehouseName(e.target.value)}
            className={
              errorWarehouseName.isActive
                ? "add-wh__input--invalid"
                : "add-wh__input"
            }
          />
          {errorWarehouseName.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorWarehouseName.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={false}
            html="streetName"
            inputId="streetName"
            inputName="Street Address"
            onChange={(e) => setAddress(e.target.value)}
            className={
              errorAddress.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
          {errorAddress.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorAddress.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={false}
            html="cityName"
            inputId="cityName"
            inputName="City"
            onChange={(e) => setCity(e.target.value)}
            className={
              errorCity.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
          {errorCity.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorCity.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={false}
            html="countryName"
            inputId="countryName"
            inputName="Country"
            onChange={(e) => setCountry(e.target.value)}
            className={
              errorCountry.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
          {errorCountry.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorCountry.message}
              className={"error--active"}
            />
          ) : null}
        </div>
        <div className="add-wh__contact-ctr">
          <h2 className="add-wh__subheader">Contact Details</h2>
          <InputBox
            isTextarea={false}
            html="contactName"
            inputId="contactName"
            inputName="Contact Name"
            onChange={(e) => setContactName(e.target.value)}
            className={
              errorContact.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
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
            html="positionName"
            inputId="positionName"
            inputName="Position"
            onChange={(e) => setPosition(e.target.value)}
            className={
              errorPosition.isActive
                ? "add-wh__input--invalid"
                : "add-wh__input"
            }
          />
          {errorPosition.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorPosition.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={false}
            html="phoneName"
            inputId="phoneName"
            inputName="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={
              errorPhone.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
          {errorPhone.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorPhone.message}
              className={"error--active"}
            />
          ) : null}
          <InputBox
            isTextarea={false}
            html="emailName"
            inputId="emailName"
            inputName="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={
              errorEmail.isActive ? "add-wh__input--invalid" : "add-wh__input"
            }
          />
          {errorEmail.isActive ? (
            <ErrorMessage
              isNotError={false}
              text={errorEmail.message}
              className={"error--active"}
            />
          ) : null}
        </div>
      </div>
      <div className="add-wh__buttons-ctr">
        <CancelButton to="/warehouse" />
        <ActionButton isButton={true} name="+ Add Warehouse" />
      </div>
    </form>
  );
};

export default AddWarehouse;
