import "./InputBox.scss";

const InputBox = ({
  isTextarea,
  isDropMenu,
  htmlFor,
  className,
  inputId,
  inputName,
  name,
  onChange,
  value,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  isRadio,
}) => {
  if (isRadio) {
    return (
      <div className="radio">
        <div className="radio__title">
          <label htmlFor={htmlFor}>{inputName}</label>
        </div>

        <div>
          <input type="radio" id="inStock" name="status" value="In Stock" />
          <label className="radio__label radio__label--stock" for="inStock">
            In stock
          </label>
          <input
            type="radio"
            id="outOfStock"
            name="status"
            value="Out Of Stock"
          />
          <label className="radio__label" for="outOfStock">
            Out of stock
          </label>
        </div>
      </div>
    );
  }
  if (isDropMenu) {
    return (
      <div className="input">
        <label htmlFor={htmlFor}>{inputName}</label>
        <select className={`input__box ${className}`}>
          <option value="{value1}">{value1}</option>
          <option value="{value2}">{value2}</option>
          <option value="{value3}">{value3}</option>
          <option value="{value4}">{value4}</option>
          <option value="{value5}">{value5}</option>
          <option value="{value6}">{value6}</option>
          <option value="{value7}">{value7}</option>
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
    <div className="input">
      <label htmlFor={htmlFor}>{inputName}</label>
      <input
        type="text"
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
