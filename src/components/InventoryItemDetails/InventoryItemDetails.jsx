import './InventoryItemDetails.scss'
import {useEffect, useState, } from 'react'
import {useParams} from "react-router-dom";
import arrowSvg from '../../assets/icons/arrow_back-24px.svg'
import editWhiteSvg from '../../assets/icons/edit-white-24px.svg'
import {API_URL_BASE, INVENTORIES_PATH} from '../../utils/utils';
import axios from 'axios';

const InventoryItemDetails = () => {

	const {id} = useParams();
	const [inventoryItem, setInventoryItem] = useState([])
	// const [documentTitle, setDocumentTitle] = useState(document.title)
	// const inventoryItemUrl = `${API_URL_BASE}/${INVENTORIES_PATH}/${id}`
	// console.log(inventoryItemUrl)

	useEffect(() => {
		axios
			.get(`http://localhost:8080/inventories/${id}`)
			.then((res) => {
				console.log(res.data[0])
				// console.log(res.data.item_name.value)
				setInventoryItem(res.data[0]);
				// setDocumentTitle(res.data.item_name.value);
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])

	return (

		<div className="item">
			<div className="item__page">
				<div className="item__header">
					<a href="/" className="back__btn"><img src={arrowSvg} alt="back" className="back__img" /></a>
					<h1>{inventoryItem.item_name}</h1>
					<a href="/" className="edit__btn"><img src={editWhiteSvg} alt="edit" className="edit__img" /><span className="edit__span">Edit</span></a>
				</div>
				<div className="item__details">
					<div className="item__tablet-container">
						<div className="tablet-container__left">
							<div className="item__description">
								<h4>item description:</h4>
								<p className='p2--description'>{inventoryItem.description}</p>
							</div>
							<div className="item__category">
								<h4>category:</h4>
								<p className='p2--category'>{inventoryItem.category}</p>
							</div>
						</div>
						<div className="tablet-container__right">
							<div className="item__stat-quant-empty-flex">
								<div className="item__status">
									<h4>status:</h4>
									<p className='item__tag'>{inventoryItem.status}</p>
								</div>
								<div className="item__quantity">
									<h4>quantity:</h4>
									<p className='p2'>{inventoryItem.quantity}</p>
								</div>
								<div className="item__empty"></div>
							</div>
							<div className="item__warehouse">
								<h4>warehouse:</h4>
								<p className='p2'>{inventoryItem.warehouse_id}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default InventoryItemDetails;
