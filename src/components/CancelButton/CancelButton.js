import "./CancelButton.scss"
import { Link } from "react-router-dom";

const CancelButton = ({to, className, onClick}) => {
    return (
        <Link 
            to={to} 
            className={`cancel-btn ${className}`}
            onClick={onClick}
        >Cancel</Link>
    );
};

export default CancelButton;