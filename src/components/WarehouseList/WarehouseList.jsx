import './WarehouseList.scss';
import WarehouseListHeader from '../WarehouseListHeader/WarehouseListHeader';
import WarehouseTableColumns from '../WarehouseTableColumns/WarehouseTableColumns';
import WarehouseTableRow from '../WarehouseTableRow/WarehouseTableRow';

const WarehouseList = () => {
	return (
		<div className="warehouse__list">
			<WarehouseListHeader />
			<WarehouseTableColumns />
			<WarehouseTableRow />
			<WarehouseTableRow />
			<WarehouseTableRow />
		</div>
	);
};

export default WarehouseList;
