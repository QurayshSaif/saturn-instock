import "./WarehouseList.scss";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import WarehouseTableColumns from "../WarehouseTableColumns/WarehouseTableColumns";
import WarehouseTableRow from "../WarehouseTableRow/WarehouseTableRow";
import { API_URL_BASE, WAREHOUSE_PATH } from '../../utils/utils'
import axios from 'axios'


const WarehouseList = () => {

  const [ warehouseList, setWarehouseList ] = useState([])
  const warehouseUrl = `${ API_URL_BASE }${ WAREHOUSE_PATH }`
  const { id } = useParams()


  useEffect(() => {
    document.title = 'InStock - Warehouses'
    axios
      .get(warehouseUrl)
      .then((response) => {
        console.log(response);

      })
  })



  return (
    <div className="warehouse">
      <WarehouseListHeader />
      <WarehouseTableColumns />
      <WarehouseTableRow />
    </div>
  );
};

export default WarehouseList;
