import "./WarehouseContactInfo.scss";

export default function WarehouseContactInfo({
  address,
  name,
  number,
  email,
  city,
  country,
  position,
}) {
  return (
    <section className="warehouse-contact">
      <div className="warehouse-contact__address">
        <h4 className="warehouse-contact__title">WAREHOUSE ADDRESS</h4>
        <div className="warehouse-contact__address-tab">
          <p>
            {address}, {city}, {country}
          </p>
        </div>
      </div>

      <div className="warehouse-contact__contact">
        <div>
          <h4 className="warehouse-contact__title">CONTACT NAME:</h4>
          <p>{name}</p>
          <p>{position}</p>
        </div>

        <div>
          <h4 className="warehouse-contact__title">CONTACT INFORMATION:</h4>
          <p>{number}</p>
          <p>{email}</p>
        </div>
      </div>
    </section>
  );
}
