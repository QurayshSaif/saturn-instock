import "./ActionButton.scss"
import { Link } from "react-router-dom";

const ActionButton = ({name, className, to, isButton}) => {
    if (isButton) {
        return (
            <button className={`action-btn ${className}`}>{name}</button>
        );
    } else {
        return (
            <Link to={to} className={`action-btn ${className}`}>{name}</Link>
        )
    }
};

export default ActionButton;


// HOW TO USE AS A COMPONENT:
//Note: Make sure that Link is imported and Routes are setup

//If you need a Button
{/* <ActionButton 
isButton={true} 
className="add-wh__add-btn" 
name="+ Add Warehouse"
/> */}


//If you need to Button-like link that redirects to a different page
{/* <ActionButton 
isButton={false} 
to="/" 
className="add-wh__add-btn" 
name="+ Add Warehouse"
/> */}