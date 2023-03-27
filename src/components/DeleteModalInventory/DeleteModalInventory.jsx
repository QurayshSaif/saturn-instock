import './DeleteModalInventory.scss'
import {useState} from 'react';
import {createPortal} from 'react-dom';
import deleteSvg from '../../assets/icons/delete_outline-24px.svg'
import ModalContent from '../ModalContent/ModalContent';

const DeleteModalInventory = () => {
	const [showModal, setShowModal] = useState(false);
	return (

		<div>
			<img src={deleteSvg} alt="delete" onClick={() => setShowModal(true)} />
			{showModal && createPortal(
				<ModalContent onClose={() => setShowModal(false)} />,
				document.body
			)}
		</div>

	);
};

export default DeleteModalInventory;
