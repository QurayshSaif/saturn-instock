import "./DeleteModalInventory.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import ModalContent from "../ModalContent/ModalContent";
import { Link } from "react-router-dom";

const DeleteModalInventory = ({ fetchWarehouseList, to, id, item_name }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <div>
      <Link to={to}>
        <img src={deleteSvg} alt="delete" onClick={() => setShowModal(true)} />
      </Link>
      {showModal &&
        createPortal(
          <ModalContent
            item_name={item_name}
            fetchWarehouseList={fetchWarehouseList}
            setShowModal={setShowModal}
            id={id}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </div>
  );
};

export default DeleteModalInventory;
