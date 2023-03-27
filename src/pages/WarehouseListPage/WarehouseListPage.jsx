import "./WarehouseListPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WarehouseTableColumns from "../../components/WarehouseTableColumns/WarehouseTableColumns";
import WarehouseTableRow from "../../components/WarehouseTableRow/WarehouseTableRow";
import { API_URL_BASE, WAREHOUSE_PATH } from "../../utils/utils";
import axios from "axios";
import WarehouseListHeader from "../../components/WarehouseListHeader/WarehouseListHeader";

const WarehouseListPage = () => {
  // const {id} = useParams()
  const [warehouseList, setWarehouseList] = useState([]);
  const warehouseUrl = `${API_URL_BASE}/api/${WAREHOUSE_PATH}`;

  const fetchWarehouseList = () => {
    axios
      .get(warehouseUrl)
      .then((res) => {
        setWarehouseList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    document.title = "InStock - Warehouse Overview";
    // axios
    //   .get(warehouseUrl)
    //   .then((res) => {
    //     setWarehouseList(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    fetchWarehouseList();
  }, []);

  return (
    <div className="warehouse">
      <WarehouseListHeader />
      <WarehouseTableColumns />

      {warehouseList.map((warehouse) => (
        <WarehouseTableRow
          item_name={warehouse.item_name}
          key={warehouse.id}
          id={warehouse.id}
          warehouseName={warehouse.warehouse_name}
          address={warehouse.address}
          city={warehouse.city}
          country={warehouse.country}
          name={warehouse.contact_name}
          phone={warehouse.contact_phone}
          email={warehouse.contact_email}
          fetchWarehouseList={fetchWarehouseList}
        />
      ))}
    </div>
  );
};

export default WarehouseListPage;
