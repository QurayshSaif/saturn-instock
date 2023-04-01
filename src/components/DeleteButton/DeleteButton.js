import "./DeleteButton.scss";
import { Link, useNavigate } from "react-router-dom";

const DeleteButton = ({className,onClick
}) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={onClick} 
      className={`delete-btn ${className}`}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
