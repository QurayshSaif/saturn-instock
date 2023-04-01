import "./DeleteModalInventory.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import deleteSvg from "../../assets/icons/delete_outline-24px.svg";
import ModalContent from "../ModalContent/ModalContent";
import { Link } from "react-router-dom";

const DeleteModalInventory = ({ fetchWarehouseList, to, id, item_name, title, subtitle, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Link to={to}>
        <img src={deleteSvg} alt="delete" onClick={() => setShowModal(true)} />
      </Link>
      {showModal &&
        createPortal(
          <ModalContent
            onClick={onClick}
            item_name={item_name}
            title={title}
            subtitle={subtitle}
            fetchWarehouseList={fetchWarehouseList}
            setShowModal={setShowModal}
            id={id}
            onClose={() => 
              setShowModal(false)
            }
          />,
          document.body
        )}
    </div>
  );
};

export default DeleteModalInventory;
