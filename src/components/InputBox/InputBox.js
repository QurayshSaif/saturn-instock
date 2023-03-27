import "./InputBox.scss";

const InputBox = ({
  isTextarea,
  isDropMenu,
  isDropMenu1,
  htmlFor,
  className,
  inputId,
  inputName,
  name,
  onChange,
  value,
  options = [],
  classInputBox,
  value1,
  value2,
  value3,
  value4,
  value5,
  isRadio,
  setInstockStatus,
  setOutofstockStatus,
  instockStatus,
  outofstockStatus,
  type,
  setQuantity,
  setErrorQuantity,
}) => {
  const handleInstockClick = () => {
    setInstockStatus(true);
    setOutofstockStatus(false);
    setQuantity(1);
  };
  const handleOutofstockClick = () => {
    setInstockStatus(false);
    setOutofstockStatus(true);
    setQuantity("0");
    setErrorQuantity(false);
  };

  if (isRadio) {
    return (
      <div className="radio">
        <div className="radio__title">
          <label htmlFor={htmlFor}>{inputName}</label>
        </div>
        <div>
          <input
            type="radio"
            id="inStock"
            name="status"
            value="inStock"
            checked={instockStatus}
            onChange={handleInstockClick}
          />
          <label className="radio__label radio__label--stock" htmlFor="inStock">
            In stock
          </label>
          <input
            type="radio"
            id="outOfStock"
            name="status"
            value="outOfStock"
            checked={outofstockStatus}
            onChange={handleOutofstockClick}
          />
          <label className="radio__label" htmlFor="outOfStock">
            Out of stock
          </label>
        </div>
      </div>
    );
  }
  if (isDropMenu1) {
    return (
      <div className="input">
        <label htmlFor={htmlFor}>{inputName}</label>
        <select
          className={`input__box ${className}`}
          value={value}
          onChange={onChange}
        >
          <option value="">Please select</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.value}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (isDropMenu) {
    return (
      <div>
        <select
          className={`input__box ${className}`}
          value={value}
          onChange={onChange}
        >
          <option value={value1}>{value1}</option>
          <option value={value2}>{value2}</option>
          <option value={value3}>{value3}</option>
          <option value={value4}>{value4}</option>
          <option value={value5}>{value5}</option>
        </select>
      </div>
    );
  }

  if (isTextarea) {
    return (
      <div className="input">
        <label htmlFor={htmlFor}>{inputName}</label>
        <textarea
          type="text"
          placeholder={inputName}
          className={`input__text input__textbox ${className}`}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    );
  }
  return (
    <div className={`input ${classInputBox}`}>
      <label htmlFor={htmlFor}>{inputName}</label>
      <input
        type={type}
        placeholder={inputName}
        className={`input__box ${className}`}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputBox;
