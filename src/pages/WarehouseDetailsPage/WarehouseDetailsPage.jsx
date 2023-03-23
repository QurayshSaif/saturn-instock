import "./WarehouseDetailsPage.scss";
import WarehouseHeader from "../../components/WarehouseHeader/WarehouseHeader";
import WarehouseContactInfo from "../../components/WarehouseContactInfo/WarehouseContactInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function WarehouseDetailsPage() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${id}`)
      .then((res) => {
        setWarehouse(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <div className="warehouse">
      <WarehouseHeader warehouseName={warehouse.warehouse_name} />
      <WarehouseContactInfo
        address={warehouse.address}
        city={warehouse.city}
        country={warehouse.country}
        name={warehouse.contact_name}
        number={warehouse.contact_phone}
        email={warehouse.contact_email}
        position={warehouse.contact_position}
      />
    </div>
  );
}
