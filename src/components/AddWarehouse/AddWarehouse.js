import ActionButton from '../ActionButton/ActionButton';
import GoBackButton from '../GoBackButton/GoBackButton';
import InputBox from '../InputBox/InputBox';
import './AddWarehouse.scss'

// wh - warehouse; ctr - container; btn - button

const AddWarehouse = () => {
    return (
        <section className='add-wh'>
            <div className='add-wh__header-ctr'>
                <GoBackButton path="/"/>
                <h1 className='add-wh__header'>Add New Warehouse</h1>
            </div>
            <div className='add-wh__details-ctr'>
                <div className='add-wh__location-ctr'>
                    <h2 className='add-wh__subheader'>Warehouse Details</h2>
                    <InputBox
                        isTextarea={false}
                        html="warehouseName"
                        inputId="warehouseName"
                        inputName="Warehouse Name"
                    />
                    <InputBox
                        isTextarea={false}
                        html="streetName"
                        inputId="streetName"
                        inputName="Street Address"
                    />
                    <InputBox
                        isTextarea={false}
                        html="cityName"
                        inputId="cityName"
                        inputName="City"
                    />
                    <InputBox
                        isTextarea={false}
                        html="countryName"
                        inputId="countryName"
                        inputName="Country"
                    />
                </div>
                <div className='add-wh__contact-ctr'>
                    <h2 className='add-wh__subheader'>Contact Details</h2>
                    <InputBox
                        isTextarea={false}
                        html="contactName"
                        inputId="contactName"
                        inputName="Contact Name"
                    />
                    <InputBox
                        isTextarea={false}
                        html="positionName"
                        inputId="positionName"
                        inputName="Position"
                    />
                    <InputBox
                        isTextarea={false}
                        html="phoneName"
                        inputId="phoneName"
                        inputName="Phone Number"
                    />
                    <InputBox
                        isTextarea={false}
                        html="emailName"
                        inputId="emailName"
                        inputName="Email"
                    />
                </div>
                <div className='add-wh__buttons-ctr'>
                    <div className='add-wh__cancel-btn'><p>Cancel</p></div>
                    {/* <button className='add-wh__add-btn'>+ Add Warehouse</button>
                     */}
                    <ActionButton button={true} className="add-wh__add-btn" name="+ Add Warehouse"/>
                </div>
            </div>
        </section>
    );
};

export default AddWarehouse;