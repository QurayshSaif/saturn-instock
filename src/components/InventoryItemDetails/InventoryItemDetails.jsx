import './InventoryItemDetails.scss'
import arrowSvg from '../../assets/icons/arrow_back-24px.svg'
import editWhiteSvg from '../../assets/icons/edit-white-24px.svg'

const InventoryItemDetails = () => {
	return (
		<div className="item">
			<div className="item__page">
				<div className="item__header">
					<a href="/" className="back__btn"><img src={ arrowSvg } alt="back" className="back__img" /></a>
					<h1>television</h1>
					<a href="/" className="edit__btn"><img src={ editWhiteSvg } alt="edit" className="edit__img" /><span className="edit__span">Edit</span></a>
				</div>
				<div className="item__details">
					<div className="item__tablet-container">
						<div className="tablet-container__left">
							<div className="item__description">
								<h4>item description:</h4>
								<p className='p2--description'>This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
							</div>
							<div className="item__category">
								<h4>category:</h4>
								<p className='p2--category'>electronics</p>
							</div>
						</div>
						<div className="tablet-container__right">
							<div className="item__stat-quant-empty-flex">
								<div className="item__status">
									<h4>status:</h4>
									<p className='item__tag--in'>in stock</p>
								</div>
								<div className="item__quantity">
									<h4>quantity:</h4>
									<p className='p2'>500</p>
								</div>
								<div className="item__empty"></div>
							</div>
							<div className="item__warehouse">
								<h4>warehouse:</h4>
								<p className='p2'>manhattan</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default InventoryItemDetails;
