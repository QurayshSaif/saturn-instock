import "./InputBox.scss"
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const InputBox = ({isTextarea,htmlFor,className,inputId,inputName,name, onChange, value, isNotError}) => {
    if (isTextarea) {
        return (
            <textarea></textarea>
        )
    } 
    return (
        <>
            <div className='input'>
                <label
                    htmlFor={htmlFor}   
                >{inputName}</label>
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
            <ErrorMessage
                    isNotError={isNotError}
                    className={"error--active"}
            />
        </>
    );
};

export default InputBox;