import "./InputBox.scss"

const InputBox = ({isTextarea,htmlFor,className,inputId,inputName,name}) => {
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
                    className={`inputbox ${className}`}
                    id={inputId}
                    name={name}
                ></input>
            </div>
        </>
    );
};

export default InputBox;