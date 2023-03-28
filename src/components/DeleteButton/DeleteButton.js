import "./DeleteButton.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteButton = ({
  to,
  setShowModel,
  id,
  className,
  fetchWarehouseList,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    axios
      .delete(`http://localhost:8080/api/warehouses/${id}`)

      .then(() => {
        navigate("/warehouse");
        fetchWarehouseList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button onClick={handleClick} className={`delete-btn ${className}`}>
      Delete
    </button>
  );
};

export default DeleteButton;
