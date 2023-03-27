import "./DeleteButton.scss"
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

const DeleteButton = ({to, id, className}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        axios
            .delete(`http://localhost:8080/inventories/${id}`)
            .then(() => {
                navigate('/inventory')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <button onClick={handleClick} className={`delete-btn ${className}`}>Delete</button>
    );
};

export default DeleteButton;
