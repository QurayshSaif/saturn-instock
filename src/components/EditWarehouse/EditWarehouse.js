import GoBackButton from "../GoBackButton/GoBackButton";
import ActionButton from "../ActionButton/ActionButton";
import CancelButton from "../CancelButton/CancelButton";
import InputBox from "../InputBox/InputBox";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./EditWarehouse.scss"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EditWarehouse = () => {

    const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const navigate = useNavigate();
    const {id} = useParams();

    const [warehouseNameEdit, setWarehouseNameEdit] = useState("");
    const [addressEdit, setAddressEdit] = useState("");
    const [cityEdit, setCityEdit] = useState("");
    const [countryEdit, setCountryEdit] = useState("");
    const [contactEdit, setContactEdit] = useState("");
    const [positionEdit, setPositionEdit] = useState("");
    const [phoneEdit, setPhoneEdit] = useState("");
    const [emailEdit, setEmailEdit] = useState("")

    const preload = () => {
        axios.get(`${REACT_APP_SERVER_URL}/api/warehouses/${id}`)
        .then((results) => {
           setWarehouseNameEdit(results.data.warehouse_name);
           setAddressEdit(results.data.address)
           setCityEdit(results.data.city)
           setCountryEdit(results.data.country)
           setContactEdit(results.data.contact_name)
           setPositionEdit(results.data.contact_position)
           setPhoneEdit(results.data.contact_phone)
           setEmailEdit(results.data.contact_email)
        })
        .catch((error) => console.log("Error: ",error)); 
    }

    useEffect(() => {
        preload()
    },[])

    const [errorWarehouseNameEdit, setErrorWarehouseNameEdit] = useState({isActive: false, message: "default"});
    const [errorAddressEdit, setErrorAddressEdit] = useState({isActive: false, message: "default"});
    const [errorCityEdit, setErrorCityEdit] = useState({isActive: false, message: "default"});
    const [errorCountryEdit, setErrorCountryEdit] = useState({isActive: false, message: "default"});
    const [errorContactEdit, setErrorContactEdit] = useState({isActive: false, message: "default"});
    const [errorPositionEdit, setErrorPositionEdit] = useState({isActive: false, message: "default"});
    const [errorPhoneEdit, setErrorPhoneEdit] = useState({isActive: false, message: "default"});
    const [errorEmailEdit, setErrorEmailEdit] = useState({isActive: false, message: "default"})

    const notEmpty = () => {
        if (warehouseNameEdit.length < 1) {
            setErrorWarehouseNameEdit({isActive: true, message: "This field is required"})  
        } else {
            setErrorWarehouseNameEdit({isActive: false, message: ""})} 
        if (addressEdit.length < 1) {
            setErrorAddressEdit({isActive: true, message: "This field is required"})  
        } else {
            setErrorAddressEdit({isActive: false, message: ""})} 
        if (cityEdit.length < 1) {
            setErrorCityEdit({isActive: true, message: "This field is required"})  
        } else {
            setErrorCityEdit({isActive: false, message: ""})} 
        if (countryEdit.length < 1) {
            setErrorCountryEdit({isActive: true, message: "This field is required"})  
        } else {
            setErrorCountryEdit({isActive: false, message: ""})} 
        if (contactEdit.length < 1) {
            setErrorContactEdit({isActive: true, message: "This field is required"})  
        } else {
            setErrorContactEdit({isActive: false, message: ""})} 
        if (positionEdit.length < 1) {
            setErrorPositionEdit({isActive: true, message: "This field is required"})  
        } else {
            setErrorPositionEdit({isActive: false, message: ""})} 
        if (phoneEdit.length < 1) {
            setErrorPhoneEdit({isActive: true, message: "This field is required"})  
        } else {
            setErrorPhoneEdit({isActive: false, message: ""})} 
        if (emailEdit.length < 1) {
            setErrorEmailEdit({isActive: true, message: "This field is required"})  
        } else {
            setErrorEmailEdit({isActive: false, message: ""})} 
    }

    const isEmailValid = () => {
        if (emailEdit.includes("@")) {
            return true}
        setErrorEmailEdit({isActive: true, message: "Enter a valid email. Hint: must include @"}) 
        return false}

    const isPhoneValid = () => {
        const phoneFormat= /^(\+\d{1,2}\s)?\(\d{3}\)\s\d{3}-\d{4}$/;
        if (phoneFormat.test(phoneEdit)) {
            return true}
        setErrorPhoneEdit({isActive: true, message: "Must have the format +1 (xxx) xxx-xxxx"}) 
        return false
    }

    const isFormValid = () => {
        if (warehouseNameEdit.length < 1 || addressEdit.length < 1 || cityEdit.length < 1 || 
            countryEdit.length < 1 || contactEdit.length < 1 || positionEdit.length < 1 || 
            phoneEdit.length < 1 || emailEdit.length < 1) {
                return false;}
        if (!isPhoneValid()) {
            return false}
        if (!isEmailValid()) {
            return false}
        return true
    }

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        notEmpty();

        if(isFormValid()) {
            axios.put(`${REACT_APP_SERVER_URL}/api/warehouses/${id}`, {
                warehouse_name: warehouseNameEdit,
                address: addressEdit,
                city: cityEdit,
                country: countryEdit,
                contact_name: contactEdit,
                contact_position: positionEdit,
                contact_phone: phoneEdit,
                contact_email: emailEdit
            })
            .then((results) => {
                navigate("/warehouse")
            })
            .catch((error) => console.log("Error: ",error)); 
        }
    }

    return (
        <form 
            onSubmit={handleSubmitEdit}
            className="edit-wh">
            <div className="edit-wh__header-ctr">
                <GoBackButton path="/warehouse"/>
                <h1 className="edit-wh__header">Edit Warehouse</h1>
            </div>
            <div className="edit-wh__details-ctr">
                <div className="edit-wh__location-ctr">
                    <h2 className="edit-wh__subheader">Warehouse Details</h2>
                    <InputBox
                        isTextarea={false}
                        html="warehouseName"
                        inputId="warehouseName"
                        inputName="Warehouse Name"
                        value={warehouseNameEdit}
                        onChange={(e) => setWarehouseNameEdit(e.target.value)}
                        className={
                            errorWarehouseNameEdit.isActive ? "edit-wh__input--invalid" : "edit-wh__input" 
                        }
                    />
                    {errorWarehouseNameEdit.isActive ? 
                        <ErrorMessage
                            isNotError={false}
                            text={errorWarehouseNameEdit.message}
                            className={"error--active"}
                        />
                        : null
                    }
                    <InputBox
                        isTextarea={false}
                        html="streetName"
                        inputId="streetName"
                        inputName="Street Address"
                        value={addressEdit}
                        onChange={(e) => setAddressEdit(e.target.value)}
                        className={
                            errorAddressEdit.isActive ? "edit-wh__input--invalid" : "edit-wh__input" 
                        }
                    />
                    {errorAddressEdit.isActive ? 
                        <ErrorMessage
                            isNotError={false}
                            text={errorAddressEdit.message}
                            className={"error--active"}
                        />
                        : null
                    }
                    <InputBox
                        isTextarea={false}
                        html="cityName"
                        inputId="cityName"
                        inputName="City"
                        value={cityEdit}
                        onChange={(e) => setCityEdit(e.target.value)}
                        className={
                            errorCityEdit.isActive ? "edit-wh__input--invalid" : "edit-wh__input" 
                        }
                    />
                    {errorCityEdit.isActive ? 
                        <ErrorMessage
                            isNotError={false}
                            text={errorCityEdit.message}
                            className={"error--active"}
                        />
                        : null
                    }
                    <InputBox
                        isTextarea={false}
                        html="countryName"
                        inputId="countryName"
                        inputName="Country"
                        value={countryEdit}
                        onChange={(e) => setCountryEdit(e.target.value)}
                        className={
                            errorCountryEdit.isActive ? "edit-wh__input--invalid" : "edit-wh__input" 
                        }
                    />
                    {errorCountryEdit.isActive ? 
                        <ErrorMessage
                            isNotError={false}
                            text={errorCountryEdit.message}
                            className={"error--active"}
                        />
                        : null
                    }
                </div>
                <div className="edit-wh__contact-ctr">
                    <h2 className="edit-wh__subheader">Contact Details</h2>
                    <InputBox
                        isTextarea={false}
                        html="contactName"
                        inputId="contactName"
                        inputName="Contact Name"
                        value={contactEdit}
                        onChange={(e) => setContactEdit(e.target.value)}
                        className={
                            errorContactEdit.isActive ? "edit-wh__input--invalid" : "edit-wh__input" 
                        }
                    />
                    {errorContactEdit.isActive ? 
                        <ErrorMessage
                            isNotError={false}
                            text={errorContactEdit.message}
                            className={"error--active"}
                        />
                        : null
                    }
                    <InputBox
                        isTextarea={false}
                        html="positionName"
                        inputId="positionName"
                        inputName="Position"
                        value={positionEdit}
                        onChange={(e) => setPositionEdit(e.target.value)}
                        className={
                            errorPositionEdit.isActive ? "edit-wh__input--invalid" : "edit-wh__input" 
                        }
                    />
                    {errorPositionEdit.isActive ? 
                        <ErrorMessage
                            isNotError={false}
                            text={errorPositionEdit.message}
                            className={"error--active"}
                        />
                        : null
                    }
                    <InputBox
                        isTextarea={false}
                        html="phoneName"
                        inputId="phoneName"
                        inputName="Phone Number"
                        value={phoneEdit}
                        onChange={(e) => setPhoneEdit(e.target.value)}
                        className={
                            errorPhoneEdit.isActive ? "edit-wh__input--invalid" : "edit-wh__input" 
                        }
                    />
                    {errorPhoneEdit.isActive ? 
                        <ErrorMessage
                            isNotError={false}
                            text={errorPhoneEdit.message}
                            className={"error--active"}
                        />
                        : null
                    }
                    <InputBox
                        isTextarea={false}
                        html="emailName"
                        inputId="emailName"
                        inputName="Email"
                        value={emailEdit}
                        onChange={(e) => setEmailEdit(e.target.value)}
                        className={
                            errorEmailEdit.isActive ? "edit-wh__input--invalid" : "edit-wh__input" 
                        }
                    />
                    {errorEmailEdit.isActive ? 
                        <ErrorMessage
                            isNotError={false}
                            text={errorEmailEdit.message}
                            className={"error--active"}
                        />
                        : null
                    }
                </div>
            </div>
            <div className="edit-wh__buttons-ctr">
                    <CancelButton
                        to="/warehouse"
                    />
                    <ActionButton 
                        isButton={true} 
                        name="Save"
                    />
                </div>
        </form>
    );
};

export default EditWarehouse;