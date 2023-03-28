import "./DeleteButton.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteButton = ({
  to,
  setShowModel,
  id,
  className,
  fetchWarehouseList,
  onClick
}) => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   axios
  //     .delete(`http://localhost:8080/api/warehouses/${id}`)

  //     .then(() => {
  //       fetchWarehouseList();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <button onClick={onClick} className={`delete-btn ${className}`}>
      Delete
    </button>
  );
};

export default DeleteButton;
