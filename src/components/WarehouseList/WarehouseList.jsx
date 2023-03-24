import "./WarehouseList.scss";
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import WarehouseTableColumns from "../WarehouseTableColumns/WarehouseTableColumns";
import WarehouseTableRow from "../WarehouseTableRow/WarehouseTableRow";
import {API_URL_BASE, WAREHOUSE_PATH} from '../../utils/utils'
import axios from 'axios'


const WarehouseList = () => {

  const {id} = useParams()
  const [warehouseList, setWarehouseList] = useState([])
  const warehouseUrl = `${API_URL_BASE}/${WAREHOUSE_PATH}`


  useEffect(() => {
    document.title = 'InStock - Warehouse Overview'
    axios
      .get(warehouseUrl)
      .then((res) => {
        setWarehouseList(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  })



  return (
    <div className="warehouse">
      <WarehouseListHeader />
      <WarehouseTableColumns />

      {warehouseList.map((warehouse) => (
        <WarehouseTableRow
          key={warehouse.id}
          id={warehouse.id}
          warehouseName={warehouse.warehouse_name}
          address={warehouse.address}
          city={warehouse.city}
          country={warehouse.country}
          name={warehouse.contact_name}
          phone={warehouse.contact_phone}
          email={warehouse.contact_email}
        />
      ))}
    </div>
  );
};

export default WarehouseList;
