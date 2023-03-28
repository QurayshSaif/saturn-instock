import "./ModalContent.scss";
import CloseButton from "../CloseButton/CloseButton";
import CancelButton from "../CancelButton/CancelButton";
import DeleteButton from "../DeleteButton/DeleteButton";

const ModalContent = ({
  fetchWarehouseList,
  setShowModel,
  onClose,
  id,
  item_name,
  title,
  subtitle,
  onClick
}) => {

  console.log(item_name)
  return (
    <div className="modal">
      <div className="modal__content">
        <CloseButton onClick={() => onClose()} className="modal__close" />
        <div className="modal__text-flex">
          <h1>{`Delete ${item_name} ${title}?`}</h1>
          <p>
            Please confirm that you'd like to delete the {item_name} {subtitle}. You won't be able to undo this action.
          </p>
        </div>
        <div className="modal__button-flex">
          <CancelButton 
            // to="/warehouse" 
            onClick={() => onClose()} 
          />
          <DeleteButton
            onClick={onClick}
            setShowModel={setShowModel}
            id={id}
            title={title}
            subtitle={subtitle}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
