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
                    <h2>Warehouse Details</h2>
                    <InputBox
                        isTextarea={false}
                        html="warehouseName"
                        inputId="warehouseName"
                        inputName="Warehouse Name"



                    />
                </div>
                <div className='add-wh__contact-ctr'>
                    <h2>Contact Details</h2>
                </div>
                <div className='add-wh__buttons-ctr'>
                    <div className='add-wh__cancel-btn'><p>Cancel</p></div>
                    <button className='add-wh__add-btn'>+ Add Warehouse</button>
                </div>
            </div>
        </section>
    );
};

export default AddWarehouse;