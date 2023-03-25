import GoBackButton from "../GoBackButton/GoBackButton";
import ActionButton from "../ActionButton/ActionButton";
import CancelButton from "../CancelButton/CancelButton";
import InputBox from "../InputBox/InputBox";
import "./EditWarehouse.scss"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EditWarehouse = () => {

    const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const {id} = useParams();
    console.log(id)

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

         console.log(warehouseNameEdit)
    const handleSubmitEdit = (event) => {
        event.preventDefault();

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
                console.log("PUT Request Sent")
            })
            .catch((error) => console.log("Error: ",error)); 
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
                        // className={
                        //     errorWarehouseName.isActive ? "edit-wh__input--invalid" : "add-wh__input" 
                        // }
                    />
                    <InputBox
                        isTextarea={false}
                        html="streetName"
                        inputId="streetName"
                        inputName="Street Address"
                        value={addressEdit}
                        onChange={(e) => setAddressEdit(e.target.value)}
                        // className={
                        //     errorAddress.isActive ? "add-wh__input--invalid" : "add-wh__input" 
                        // }
                    />
                    <InputBox
                        isTextarea={false}
                        html="cityName"
                        inputId="cityName"
                        inputName="City"
                        value={cityEdit}
                        onChange={(e) => setCityEdit(e.target.value)}
                        // className={
                        //     errorCity.isActive ? "add-wh__input--invalid" : "add-wh__input" 
                        // }
                    />
                    <InputBox
                        isTextarea={false}
                        html="countryName"
                        inputId="countryName"
                        inputName="Country"
                        value={countryEdit}
                        onChange={(e) => setCountryEdit(e.target.value)}
                        // className={
                        //     errorCountry.isActive ? "add-wh__input--invalid" : "add-wh__input" 
                        // }
                    />
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
                        // className={
                        //     errorContact.isActive ? "add-wh__input--invalid" : "add-wh__input" 
                        // }
                    />
                    <InputBox
                        isTextarea={false}
                        html="positionName"
                        inputId="positionName"
                        inputName="Position"
                        value={positionEdit}
                        onChange={(e) => setPositionEdit(e.target.value)}
                        // className={
                        //     errorPosition.isActive ? "add-wh__input--invalid" : "add-wh__input" 
                        // }
                    />
                    <InputBox
                        isTextarea={false}
                        html="phoneName"
                        inputId="phoneName"
                        inputName="Phone Number"
                        value={phoneEdit}
                        onChange={(e) => setPhoneEdit(e.target.value)}
                        // className={
                        //     errorPhone.isActive ? "add-wh__input--invalid" : "add-wh__input" 
                        // }
                    />
                    <InputBox
                        isTextarea={false}
                        html="emailName"
                        inputId="emailName"
                        inputName="Email"
                        value={emailEdit}
                        onChange={(e) => setEmailEdit(e.target.value)}
                        // className={
                        //     errorEmail.isActive ? "add-wh__input--invalid" : "add-wh__input" 
                        // }
                    />
                </div>
            </div>
            <div className="edit-wh__buttons-ctr">
                    <CancelButton
                        to="/"
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