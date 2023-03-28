import './ModalContent.scss'
import CloseButton from '../CloseButton/CloseButton';
import CancelButton from '../CancelButton/CancelButton';
import DeleteButton from '../DeleteButton/DeleteButton';

const ModalContent = (onClose, id, item_name) => {
	return (
		<div className="modal">
			<div className="modal__content">
				<CloseButton
					onClick={onClose}
					className='modal__close'
				/>
				<div className="modal__text-flex">
					<h1>{`Delete ${item_name} inventory item?`}</h1>
					<p>Please confirm that you'd like to delete {`${item_name}`} from the inventory list. You won't be able to undo this action.</p>
				</div>
				<div className="modal__button-flex">
					<CancelButton
						onClick={onClose}
					/>
					<DeleteButton
						id={id}
					/>
				</div>
			</div>
		</div >
	);
};

export default ModalContent;