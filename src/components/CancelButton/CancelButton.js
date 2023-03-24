import "./CancelButton.scss"
import { Link } from "react-router-dom";

const CancelButton = ({to, className}) => {
    return (
        <Link to={to} className={`cancel-btn ${className}`}>Cancel</Link>
    );
};

export default CancelButton;