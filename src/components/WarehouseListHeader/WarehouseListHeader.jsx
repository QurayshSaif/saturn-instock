import './WarehouseListHeader.scss';

const WarehouseListHeader = () => {
	return (
		<div className="warehouse__header">
			<h1>Warehouses</h1>
			<div className="warehouse__header--nav">
				<input type="search" name="search" id="search" placeholder='Search...' />
				<a href="/">+ Add New Warehouse</a>
			</div>
		</div>
	);
};

export default WarehouseListHeader;
