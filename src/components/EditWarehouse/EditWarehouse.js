import GoBackButton from "../GoBackButton/GoBackButton";
import ActionButton from "../ActionButton/ActionButton";
import CancelButton from "../CancelButton/CancelButton";
import "./EditWarehouse.scss"

const EditWarehouse = () => {
    return (
        <form className="edit-wh">
            <div className="edit-wh__header-ctr">
                <GoBackButton path="/warehouse"/>
                <h1 className="edit-wh__header">Edit Warehouse</h1>
            </div>
            <div className="edit-wh__details-ctr">
                <div className="edit-wh__location-ctr">
                    <h2 className="edit-wh__subheader">Warehouse Details</h2>

                </div>
                <div className="edit-wh__contact-ctr">
                    <h2 className="edit-wh__subheader">Contact Details</h2>

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