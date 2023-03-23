import { useState } from 'react';
import ActionButton from '../ActionButton/ActionButton';
import CancelButton from '../CancelButton/CancelButton';
import GoBackButton from '../GoBackButton/GoBackButton';
import InputBox from '../InputBox/InputBox';
import './AddWarehouse.scss'
import axios from 'axios';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { FALSE } from 'sass';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
// const post_url = REACT_APP_SERVER_URL + "/warehouses"
// console.log("Post URL",post_url)

// wh - warehouse; ctr - container; btn - button

const AddWarehouse = () => {



    const [warehouseName, setWarehouseName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactName, setContactName] = useState("");
    const [position, setPosition] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");


    const notEmpty = () => {
        // console.log(warehouseName)
        console.log(address.length)

            // warehouseName.length < 1 || 
            // address.length < 1 || 
            // city.length < 1 || 
            // country.length < 1 || 
            // contactName.length < 1 ||
            // position.length < 1 ||
            // phoneNumber.length < 1


    //     if (warehouseName.length < 1) {
    //             return false
    //         }
    //     if (address.length < 1) {
    //             return false
    //     }
    //     if (city.length < 1) {
    //             return false
    //     }
    //     if (country.length < 1) {
    //             return false        
    //     }
    //     if (contactName.length < 1) {
    //             return false
    //     }
    //     if (position.length < 1) {
    //             return false
    //     }
    //     if (phoneNumber.length < 1) {
    //             return false        
    //     }
    //     return true
    }

    const isEmailCorrect = () => {    
        if ( email.length < 1) {
            return false
        }

        if (!email.includes("@")) {
            return false
        }
        return true
    }

    console.log(notEmpty())

    const isFormValid = () => {
        if(!notEmpty()) {
            return false
        }
        if(!isEmailCorrect()) {
            return false
        }
        return true
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            // This is where we would make an axios request
            // to our backend to add the user to our database.
            alert("Added successfully");
            console.log("warehouse",warehouseName)
            console.log("address",address)
            console.log("city",city)
            console.log("country",country)
            console.log("contactName",contactName)
            console.log("position",position)
            console.log("phoneNumber",phoneNumber)
            console.log("email",email)


            console.log("URL",REACT_APP_SERVER_URL)
            axios.post(`http://localhost:8080/warehouses`, {
                    warehouse_name: warehouseName,
                    address: address,
                    city: city,
                    country: country,
                    contact_name: contactName,
                    contact_position: position,
                    contact_phone: phoneNumber,
                    contact_email: email
            })
                .then((result) => console.log("POST Send"))
                .catch((error) => console.log("Error: ",error));
          } else {
            alert("Failed to add, you have errors in your form");
          }

        event.target.reset();
    }

    return (
        <form 
            className='add-wh'
            onSubmit={handleSubmit}
        >
            <div className='add-wh__header-ctr'>
                <GoBackButton path="/"/>
                <h1 className='add-wh__header'>Add New Warehouse</h1>
            </div>
            <div className='add-wh__details-ctr'>
                <div className='add-wh__location-ctr'>
                    <h2 className='add-wh__subheader'>Warehouse Details</h2>
                    <InputBox
                        // isError={true}
                        isTextarea={false}
                        html="warehouseName"
                        inputId="warehouseName"
                        inputName="Warehouse Name"
                        onChange={(e) => setWarehouseName(e.target.value)}
                        className={
                            notEmpty() || warehouseName === "" ? "add-wh__input" : "add-wh__input--invalid"
                        }
                    />
                    <InputBox
                        isTextarea={false}
                        html="streetName"
                        inputId="streetName"
                        inputName="Street Address"
                        onChange={(e) => setAddress(e.target.value)}
                        className={
                            notEmpty() || address === "" ? "add-wh__input" : "add-wh__input--invalid"
                        }
                    />
                    <InputBox
                        isTextarea={false}
                        html="cityName"
                        inputId="cityName"
                        inputName="City"
                        onChange={(e) => setCity(e.target.value)}
                        className={
                            notEmpty() || city === "" ? "add-wh__input" : "add-wh__input--invalid"
                        }
                    />
                    <InputBox
                        isTextarea={false}
                        html="countryName"
                        inputId="countryName"
                        inputName="Country"
                        onChange={(e) => setCountry(e.target.value)}
                        className={
                            notEmpty() || country === "" ? "add-wh__input" : "add-wh__input--invalid"
                        }
                    />
                </div>
                <div className='add-wh__contact-ctr'>
                    <h2 className='add-wh__subheader'>Contact Details</h2>
                    <InputBox
                        isTextarea={false}
                        html="contactName"
                        inputId="contactName"
                        inputName="Contact Name"
                        onChange={(e) => setContactName(e.target.value)}
                        className={
                            notEmpty() || contactName === "" ? "add-wh__input" : "add-wh__input--invalid"
                        }
                    />
                    <InputBox
                        isTextarea={false}
                        html="positionName"
                        inputId="positionName"
                        inputName="Position"
                        onChange={(e) => setPosition(e.target.value)}
                        className={
                            notEmpty() || position === "" ? "add-wh__input" : "add-wh__input--invalid"
                        }
                    />
                    <InputBox
                        isTextarea={false}
                        html="phoneName"
                        inputId="phoneName"
                        inputName="Phone Number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={
                            notEmpty() || phoneNumber === "" ? "add-wh__input" : "add-wh__input--invalid"
                        }
                    />
                    <InputBox
                        isTextarea={false}
                        html="emailName"
                        inputId="emailName"
                        inputName="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={
                            isEmailCorrect() || email === "" ? "add-wh__input" : "add-wh__input--invalid"
                        }
                    />
                </div>
            </div>
            <div className='add-wh__buttons-ctr'>
                    <CancelButton
                        to="/"
                    />
                    <ActionButton 
                        isButton={true} 
                        name="+ Add Warehouse"
                    />
                </div>
        </form>
    );
};

export default AddWarehouse;